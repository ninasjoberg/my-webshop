//Persisting layout between page changes
//Keeping state when navigating pages
//Custom error handling using componentDidCatch
//Inject additional data into pages (for example by processing GraphQL queries)
import React from 'react'
import { initializeStore } from '../store'
import { Provider } from 'mobx-react'
import App, { Container } from 'next/app'
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
	}
	html {
		font-family: helvetica;
		text-align: center;
		line-height: 1.5;
		background-color: #bf9caa;
		h1 {
			font-weight: 100;
			letter-spacing: 2px;
			text-transform: uppercase;
		}
		h2 {
			margin: 16px auto;
			font-weight: 100;
			letter-spacing: 2px;
			text-transform: uppercase;
		}
		h3 {
			margin: 16px auto;
			font-weight: 100;
			letter-spacing: 2px;
			text-transform: uppercase;
		}
		p {
			margin: 0;
			color: #51616a;
		}
		ul, li, a {
			text-decoration: none;
			list-style-type: none;
			padding: 0;
		}
		button:focus {
			outline: 0;
			opacity: 1;
		}
		a {
			font-size: 16px;
		}
	}
`;


export default class MyApp extends App {
	static async getInitialProps({ Component, router, ctx }) {
		// Get or Create the store with `undefined` as initialState
		// This allows you to set a custom default initialState
		const mobxStore = initializeStore()

		// Provide the store to getInitialProps of pages
		let pageProps = {}
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}
		return {
			pageProps,
			initialMobxState: mobxStore
		}
	}

	constructor(props) {
		super(props)
		const isServer = !process.browser;
		this.mobxStore = isServer
			? props.initialMobxState
			: initializeStore(props.initialMobxState)
	}

	render() {
		const { Component, pageProps } = this.props
		return (
			<Container>
				<GlobalStyle />
				<Provider store={this.mobxStore}>
					<Component {...pageProps} />
				</Provider>
			</Container>
		)
	}
}
