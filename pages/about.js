import Image from 'next/image'
import Head from 'next/head'
import client from '../cmsApi'
import Header from '../components/Header'
import PageContent from '../components/PageContent'
import Footer from '../components/Footer'

const about = ({ pageInfo }) => {
    const { body, imageUrls } = pageInfo[0]

    const imageArray = imageUrls.map((imageUrl, index) => {
        return (
            <Image
                key={index}
                src={imageUrl}
                alt="product picture"
                height={500}
                width={500}
            />
        )
    })

    const texArray = body.map((section) => {
        return <p key={section[0]._key}>{section[0].text}</p>
    })

    return (
        <>
            <Head>
                <title>bell pepper: silversmycken</title>
                <meta
                    name="description"
                    content="Handgjorda smycken i 925 sterling silver, tillverkade i liten skala. Kvinnosymboler, geometriska former och stilren design."
                />
                <link rel="canonical" href="https://www.bellpepper.se/about" />
            </Head>
            <Header />
            <PageContent imageArray={imageArray} texArray={texArray} />
            <Footer />
        </>
    )
}

// This function gets called at build time
export const getStaticProps = async () => {
    const pageQuery = `*[_type == 'page' && title == 'About'] {
		"body": body.se[].children[],
		"imageUrls": images[].asset->url,
	}`
    const pageInfo = await client.fetch(pageQuery)
    return {
        props: {
            pageInfo,
        },
    }
}

export default about
