import '../styles/raster2.css'
import '../styles/global.css'

export const site = {
  name: 'Felix Häberle',
  title: 'Felix Häberle – Portfolio'
}

export let socialLinks = [
  {
    title: 'GitHub',
    url: 'https://github.com/felixhaeberle'
  }, {
    title: 'Twitter',
    url: 'https://twitter.com/felixhaberle'
  }, {
    title: 'LinkedIn',
    url: 'https://linkedin.com/in/felixhaeberle'
  }, {
    title: 'Drupal',
    url: 'https://www.drupal.org/u/fhaeberle'
  }
]

export const legalLinks = [
  {
    title: 'Legal',
    url: '/legal'
  }, {
    title: 'Privacy Policy',
    url: '/privacy'
  }
]

export default function App({ Component, pageProps }) {
  return  <Component {...pageProps} />
}
