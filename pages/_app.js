import { Provider } from 'react-redux'
import Head from 'next/head'
import { store } from '../redux/store'
import GlobalStyle from '../components/GlobalStyles'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
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
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
