const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const embedYouTube = require("eleventy-plugin-youtube-embed");
const { manipulateCSS } = require("./_helpers/css-compression.js");

module.exports = eleventyConfig => {
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

  manipulateCSS(eleventyConfig);

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
