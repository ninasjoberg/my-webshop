import { Provider } from 'react-redux'
import { store } from '../redux/store'
import styled from 'styled-components'
import GlobalStyle from '../components/GlobalStyles'

const NewSiteModal = styled.div`
    background-color: #fff;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    padding: 32px;
    border: 1px solid #dce1e2;
    border-radius: 3px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.16);
    display: flex;
    flex-direction: column;
    z-index: 1;
`

const Link = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        font-size: 28px;
        color: black;
        font-weight: 100;
        text-decoration: underline;
        margin-bottom: 16px;
        max-width: 100%;
    }
`

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Provider store={store}>
                <NewSiteModal>
                    <h2 style={{ fontSize: '28px' }}>
                        Webbshopen har bytt namn och adress:
                    </h2>
                    <Link href="https://njs925.se">
                        <p>njs925.se</p>
                        <img
                            src="/njs925.webp"
                            style={{ width: '300px' }}
                        ></img>
                    </Link>
                </NewSiteModal>
                <Component {...pageProps} />
            </Provider>
        </>
    )
}

export default MyApp
