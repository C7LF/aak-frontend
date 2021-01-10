import {
  ApolloClient,
  createHttpLink,
  from,
  InMemoryCache,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

const httpLink = createHttpLink({
  uri: `${API_URL}/graphql`,
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
