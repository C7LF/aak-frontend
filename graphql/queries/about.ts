import { gql } from '@apollo/client';

export const GET_ABOUT = gql`
  query {
    about {
      content
    }
  }
`;
