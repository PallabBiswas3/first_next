
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../../utils/fontawesome'; // Import the fontawesome configuration from the correct location

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
