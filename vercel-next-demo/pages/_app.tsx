import Script from 'next/script'
import type { AppProps } from 'next/app'
import 'styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
    <Component {...pageProps} />
  </div>

}
export default MyApp
