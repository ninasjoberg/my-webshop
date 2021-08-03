import client from '../cmsApi'
import Header from '../components/Header'
import PageContent from '../components/PageContent'
import Footer from '../components/Footer'


const productCare = ({ pageInfo }) => {
	const { body } = pageInfo[0]

	const texArray = body.map((section) => {
		return <p key={section[0]._key}>{section[0].text}</p>
	})

	return (
		<>
			<Header />
			<PageContent texArray={texArray} />
			<Footer />
		</>
	)
}

// This function gets called at build time
export const getStaticProps = async() => {
	const pageQuery = `*[_type == 'page' && title == 'Conditions'] {
		"body": body.se[].children[],
	}`;
	const pageInfo = await client.fetch(pageQuery)
	return {
		props: {
			pageInfo
		}
	}
}

export default productCare