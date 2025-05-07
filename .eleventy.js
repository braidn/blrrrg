const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const embedYouTube = require("eleventy-plugin-youtube-embed");
const lightningCSS = require("@11tyrocks/eleventy-plugin-lightningcss");

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(lightningCSS);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy(".well-known");
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(embedYouTube);

  let markdownIt = require("markdown-it");
  let markdownFootnotes = require('markdown-it-footnote')
  let options = {
    html: true
  };
  let markdownLib = markdownIt(options).use(markdownFootnotes);

  eleventyConfig.setLibrary("md", markdownLib);

  return {
    //Use ejs in html templates
    htmlTemplateEngine: "liquid",
    templateFormats: [
      "html",
      "md",
      "njk"
    ]
  };
};
