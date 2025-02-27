import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost:8000/graphql/', // Ajuste para a URL correta da sua API
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('@App:token');
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : '',
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const LOGIN_MUTATION = gql`
  mutation TokenAuth($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;

export const GET_EVENTS = gql`
  query GetEventsPagination(
    $offset: Int
    $limit: Int
    $name: String
    $startDate: String
    $endDate: String
    $orderBy: String
  ) {
    allEvents(
      offset: $offset
      limit: $limit
      name: $name
      startDate: $startDate
      endDate: $endDate
      orderBy: $orderBy
    ) {
      items {
        id
        name
        startDate
        endDate
      }
      totalCount
      hasNextPage
    }
  }
`;

export const GET_EVENT_DETAILS = gql`
  query GetEventDetails($id: ID!) {
    eventById(id: $id) {
      id
      name
      startDate
      endDate
      daily
      ratingsByEvent {
        id
        profile {
          id
          name
          ratingStats
          ratings {
            score
            scoreDisplay
          }
        }
      }
    }
  }
`; 

