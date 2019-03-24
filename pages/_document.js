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
                <title>bell pepper</title>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            </Head>
            <body style={{margin: 0}}>
                <Main />
                <NextScript />
            </body>
        </html>
      )
    }
}