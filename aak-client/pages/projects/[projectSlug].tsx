import React from 'react';

import { GET_PROJECT, GET_PROJECTS } from '@graphql/queries/projects';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetServerSidePropsType,
} from 'next';

import client from '@lib/apollo';
import { SingleProject } from '@models/project.model';

interface ProjectProps {
  project: InferGetServerSidePropsType<typeof getStaticProps>;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params.projectSlug;

  const { data } = await client.query({
    query: GET_PROJECT,
    variables: { slug: slug.toString() },
  });

  return {
    props: {
      project: data.projects[0],
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: GET_PROJECTS,
  });

  const paths = data.projects.map((project: SingleProject) => ({
    params: { projectSlug: project.slug.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
};

const Project: React.FC<ProjectProps> = ({ project }) => {
  return <p>{JSON.stringify(project)}</p>;
};

export default Project;
