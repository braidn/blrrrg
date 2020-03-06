const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPlugin(pluginRss);

  return {
    //Use ejs in html templates
    htmlTemplateEngine: "liquid"
  };
};
