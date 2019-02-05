const sanityClient = require('@sanity/client');

const client = sanityClient({
  projectId: '37lcj78e',
  dataset: 'products',
  useCdn: true,
});

export default client;