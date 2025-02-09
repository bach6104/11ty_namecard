module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles"); 
  eleventyConfig.addPassthroughCopy("scripts"); 

  return {
    dir: {
      input: ".", 
      includes: "_includes", 
      layouts: "_includes/layouts", 
      output: "_site", 
    },
  };
};
