const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy("img");

  return {
    //Use ejs in html templates
    htmlTemplateEngine: "liquid"
  };
};