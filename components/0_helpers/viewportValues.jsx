// Viewport values
export const mediaSizes = {
  xlarge: "100rem", // 1600px
  large: "90rem",   // 1440px
  medium: "64rem",  // 1024px
  small: "40rem",   // 640px
  xsmall: "26rem"   // 416px
}

// Render CSS variables in the browser
if (typeof window !== 'undefined') {
  Object.keys(mediaSizes).forEach(function(key) {
    document.querySelector(":root").style.setProperty(`--media-size-${key}`, mediaSizes[key]);
  });
}

// Custom media query hook for Tailwind
export default {
  greaterThan: (size) => `@media (min-width: ${mediaSizes[size]})`,
  lessThan: (size) => `@media (max-width: ${mediaSizes[size]})`,
  between: (smallSize, largeSize) => 
    `@media (min-width: ${mediaSizes[smallSize]}) and (max-width: ${mediaSizes[largeSize]})`,
};