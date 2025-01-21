import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head' // Nový import
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sinien Koira',
  description: 'Lesnictví a prodej palivového dřeva',
  keywords: 'dřevo, pila, traktor, objednávka, dřevopráce, lesnictví, les, vlečka, palivové, tvrdé, měkké, prodej, zelená, Sinien Koira, Čelechovice na Hané',
  viewport: 'device-width, initial-scale=1, shrink-to-fit=no',
  themeColor: '#388e3c'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="cs">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="viewport" content={metadata.viewport} />
        <meta name="theme-color" content={metadata.themeColor} />
        {/* Pokud máte další meta tagy nebo odkazy na styly, přidejte je sem */}
      </Head>
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
