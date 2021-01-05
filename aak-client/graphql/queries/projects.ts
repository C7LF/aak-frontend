import { gql } from '@apollo/client';

export const GET_PROJECTS = gql`
  query {
    projects {
      title
      image {
        formats
      }
    }
  }
`;

export const GET_GALLERY_PROJECTS = gql`
  query {
    projects {
      title
      image {
        formats
      }
    }
  }
`;
