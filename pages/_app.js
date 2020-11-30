// Vital to load the stylesheets in this order due to several classes being assigned to a single HTML element which affect the same property e.g. change the order here and see the difference on the "Request a Demo" form
import '../css/utilities.css'
import '../css/style.css'


// See https://github.com/FortAwesome/react-fontawesome#integrating-with-other-tools-and-frameworks
import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import { faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faServer, faUpload, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'

library.add( faTwitter, faFacebook, faInstagram, faGithub, faServer, faUpload, faProjectDiagram )

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
