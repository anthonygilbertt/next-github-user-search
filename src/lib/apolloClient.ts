import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
      // 'Authorization': `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}` // Ensure you have this token in your environment variables
      'Authorization': `Bearer ${process.env.CLASSIC_PAT}` // Ensure you have this token in your environment variables
    },
  }),
  cache: new InMemoryCache(),
});

export default client;