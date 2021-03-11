import '../styles/raster2.css'
import '../styles/global.css'
import { generateMedia } from 'styled-media-query'

export const mediaSizes = {
  xlarge: "100rem",
  large: "90rem",
  medium: "64rem",
  small: "40rem",
  xsmall: "26rem"
}

// Render CSS variables in the browser
typeof window !== 'undefined' ? (
  Object.keys(mediaSizes).map(function(key, index) {
    return(document.querySelector(":root").style.setProperty(`--media-size-${key}`, mediaSizes[key]))
 })
) : null

export const media = generateMedia({
  xlarge: mediaSizes.xlarge,
  large: mediaSizes.large,
  medium: mediaSizes.medium,
  small: mediaSizes.small,
  xsmall: mediaSizes.xsmall
});

export default function App({ Component, pageProps }) {  
  return <Component {...pageProps} />
}



