'leaflet/dist/leaflet.css'

import '../styles/globals.css'
import RootLayout from '../layout'
import type { AppProps } from 'next/app'

function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}

export default MyApp
