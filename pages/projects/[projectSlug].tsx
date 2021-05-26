import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import {
  Layout,
  FancyGallery,
  Breadcrumbs,
  MarkdownContent,
} from '@components';
import { GET_PROJECT, GET_PROJECTS } from '@graphql/queries/projects';
import client from '@lib/apollo';
import { SingleProject } from '@models/project.model';
import { correctImageUrl } from '@utils';

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
    revalidate: 60,
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
    fallback: 'blocking',
  };
};

const Project: React.FC<ProjectProps> = ({ project }) => {
  if (project) {
    return (
      <>
        <Head>
          <title>{project.title} | AAK</title>
        </Head>
        <Layout varient="full">
          <div className="container mx-auto">
            <Breadcrumbs />
          </div>
          <div className="md:flex">
            <div className="md:w-1/2 h-pi bg-gray-100">
              <div className="container inset-center mt-20">
                <div className="md:w-1/2 md:pr-12">
                  <h1 className="text-5xl font-semibold mb-2">
                    {project.title}
                  </h1>
                  <p className="font-light text-lg">{project.heroContent}</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 h-pi relative">
              <Image
                src={correctImageUrl(project.image.url)}
                alt={project.image.alternativeText}
                loading="lazy"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="container mx-auto relative mt-10">
            <MarkdownContent content={project.content} />
            {project.fancyGallery && (
              <FancyGallery fancyItems={project.fancyGallery} />
            )}
          </div>
        </Layout>
      </>
    );
  }
};

export default Project;
