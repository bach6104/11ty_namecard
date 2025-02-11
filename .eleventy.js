module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles"); 
  eleventyConfig.addPassthroughCopy("scripts");

  // Shortcode for Planetary Cards
  eleventyConfig.addShortcode("planet-cards", function (group, name, astroUnit, size, color) {
    return `
      <div class="card ${group}">
        <div class="planet-avatar" style="width: ${size}; height: ${size}; background-color: ${color};"></div>
        <h2>${name}</h2>
        <h3>${astroUnit}</h3>
      </div>
    `;
  });
};
