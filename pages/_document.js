//Is rendered on the server side
//Is used to change the initial server side rendered document markup
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'


export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [...initialProps.styles, ...sheet.getStyleElement()]
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
        <html>
            <Head>
                <title>bell pepper: silversmycken</title>
                <meta property="og:title" content="bell pepper: silversmycken"></meta>
                <meta property="og:type" content="website"></meta>
                <meta property="og:description" content="Handgjorda smycken i 925 sterling silver, tillverkade i liten skala. Kvinnosymboler, geometriska former och stilren design."></meta>
                <meta name="description" content="Handgjorda smycken i 925 sterling silver, tillverkade i liten skala. Kvinnosymboler, geometriska former och stilren design."></meta>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no" />
                <meta name="google-site-verification" content="P62ChL8wEUwp2QCClCPZzZ5Apk4xZm1sIfI9T-z0fsE" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                <link rel="canonical" href="https://www.bellpepper.se"></link>
            </Head>
            <body style={{margin: 0}}>
                <Main />
                <NextScript />
            </body>
        </html>
      )
    }
}