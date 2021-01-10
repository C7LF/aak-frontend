import { gql } from '@apollo/client';

export const GET_PROJECTS = gql`
  query {
    projects {
      id
      slug
      title
      image {
        formats
      }
    }
  }
`;

export const GET_PROJECT = gql`
  query GetProjectBySlug($slug: String!) {
    projects(where: { slug: $slug }) {
      id
      slug
      title
      content
      image {
        formats
      }
    }
  }
`;
