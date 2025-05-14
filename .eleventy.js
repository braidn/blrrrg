import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginRss from "@11ty/eleventy-plugin-rss";
import embedYouTube from "eleventy-plugin-youtube-embed";
import markdownIt from "markdown-it";
import pluginBundle from "@11ty/eleventy-plugin-bundle";
import markdownFootnotes from "markdown-it-footnote";
import CleanCSS from "clean-css";

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginBundle, {
    transform: [
      async function (code, _inputPath) {
        if (this.type === "css" && process.env.ELEVENTY_ENV === "production") {
          return (new CleanCSS).minify(code).styles;
        }
        return content;
      }
    ]
  });
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy(".well-known");
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(embedYouTube);
  eleventyConfig.addBundle("css")

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
}

