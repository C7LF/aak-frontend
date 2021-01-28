import React from 'react';

import { GET_PROJECT, GET_PROJECTS } from '@graphql/queries/projects';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';

import Breadcrumbs from '@components/breadcrumbs.component';
import { Layout } from '@components/layout.component';
import client from '@lib/apollo';
import { SingleProject } from '@models/project.model';

interface ProjectProps {
  project: SingleProject;
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
    revalidate: 1,
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
  return (
    <>
      <Layout varient="regular">
        <Breadcrumbs />
        <div className="h-pi relative">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}${project.image.url}`}
            alt={project.image.alternativeText}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h1 className="text-5xl font-semibold">{project.title}</h1>
        <p>{project.content}</p>
      </Layout>
    </>
  );
};

export default Project;
