import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="hu">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#1d4ed8" />
        <meta name="author" content="AblakUnio" />
        <meta name="robots" content="index, follow" />
        {/* Open Graph alapok */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="AblakUnio" />
        <meta property="og:locale" content="hu_HU" />
        {/* Twitter alapok */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}