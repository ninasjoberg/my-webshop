//Persisting layout between page changes
//Keeping state when navigating pages
//Custom error handling using componentDidCatch
//Inject additional data into pages (for example by processing GraphQL queries)
import React from 'react'
import App, { Container } from 'next/app'
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  html {
    font-family: helvetica;
    text-align: center;
    line-height: 1.5;
    h1 {
        font-size: 42px;
        font-weight: 100;
        letter-spacing: 2px;
        text-transform: uppercase;
    }
    h2 {
        margin: 16px auto;
        font-size: 32px;
        font-weight: 100;
        letter-spacing: 2px;
        text-transform: uppercase;
    }
    h3 {
        margin: 16px auto;
        font-size: 24px;
        font-weight: 100;
        letter-spacing: 2px;
        text-transform: uppercase;
    }
    p {
        margin: 6px auto;
        font-size: 18px;
    }
    ul, li, a {
        text-decoration: none;
        list-style-type: none;
    }
    button:focus {
        outline: 0;
    }
  }
`;


export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <GlobalStyle />
        <Component {...pageProps} />
      </Container>
    )
  }
}
