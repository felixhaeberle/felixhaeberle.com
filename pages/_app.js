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



