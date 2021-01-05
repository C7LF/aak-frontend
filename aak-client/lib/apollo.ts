import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

const httpLink = createHttpLink({
  uri: `${API_URL}/graphql`,
});

const client = new ApolloClient({
  ssrMode: true,
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
