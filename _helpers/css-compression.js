import zlib from 'zlib';
import dotenv from "dotenv";
import CleanCSS from 'clean-css';
import fs from 'fs';
import crypto from 'crypto';
import path from 'path';
dotenv.config();

// An example of how you could add additional CleanCSS settings if required
const cleanCSS = new CleanCSS({
	level: {
		2: {
			removeDuplicateRules: true
		}
	}
});

// Default Brotli compression level if not set in the environment
const DEFAULT_BROTLI_COMPRESSION_LEVEL = 6;

export function manipulateCSS(eleventyConfig) {
	eleventyConfig.addShortcode("customCSS", async function(cssPath) {
		if (process.env.ELEVENTY_ENV === 'development') {
			return `<link rel="stylesheet" href="${cssPath}">`;
		}

		const inputFile = path.join('./public', cssPath);
		const outputDirectory = path.join('./_site', 'css');
		const cacheDirectory = path.join('./.cache', 'css');

		// Get compression level from the environment or use the default
		const brotliCompressionLevel = parseInt(process.env.BROTLI_COMPRESSION_LEVEL || DEFAULT_BROTLI_COMPRESSION_LEVEL, 10);

		try {
			if (!fs.existsSync(inputFile)) {
				console.error(`Input CSS file not found: ${inputFile}`);
				return '';
			}

			for (const dir of [cacheDirectory, outputDirectory]) {
				if (!fs.existsSync(dir)) {
					fs.mkdirSync(dir, { recursive: true });
				}
			}

			const inputCSS = await fs.promises.readFile(inputFile, 'utf8');
			const hash = crypto.createHash('sha256').update(inputCSS).digest('hex').slice(0, 10);

			const cacheKey = `${hash}-${cssPath.replace(/[\/\\]/g, '-')}`;
			const cachePath = path.join(cacheDirectory, cacheKey);

			let processedCSS;
			if (fs.existsSync(cachePath)) {
				processedCSS = await fs.promises.readFile(cachePath, 'utf8');
			} else {
				processedCSS = cleanCSS.minify(inputCSS).styles;
				await fs.promises.writeFile(cachePath, processedCSS);
			}

			const parsedPath = path.parse(inputFile);
			const finalFilename = path.join(outputDirectory, `${parsedPath.name}-${hash}${parsedPath.ext}`);
			await fs.promises.writeFile(finalFilename, processedCSS);

			// Brotli compression

			// The output filename for the compressed file
			const brotliFilename = `${finalFilename}.br`;

			// Only compress to Brotli if the file doesn't exist
			if (!fs.existsSync(brotliFilename)) {
				// Set our zlib options here e.g. compression
				const brotliOptions = {
					level: brotliCompressionLevel // Use the level specified in the environment
				};
				// zlib does it's compression magic!
				const brotliBuffer = zlib.brotliCompressSync(Buffer.from(processedCSS), brotliOptions);
				// Write the compressed code to the output filename defined above
				await fs.promises.writeFile(brotliFilename, brotliBuffer);
			}

			const hashedPath = brotliFilename.replace(path.join('./_site'), '').replace(/\\/g, '/');
			return `<link rel="stylesheet" href="${hashedPath}">`;
		} catch (err) {
			console.error("Error processing CSS:", err);
			return "";
		}
	});
}
