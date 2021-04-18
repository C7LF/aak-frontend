import React from 'react';

import { GetStaticProps } from 'next';

import { Footer, Gallery, NavBar } from '@components';
import { GET_PROJECTS } from '@graphql/queries/projects';
import client from '@lib/apollo';
import { SingleProject } from '@models/project.model';

interface ProjectsProps {
  projects: SingleProject[];
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: GET_PROJECTS,
  });

  return {
    props: {
      projects: data.projects,
    },
    revalidate: 1,
  };
};

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <>
      <NavBar />
      <div className="bg-gray-50 py-24 pt-32 md:pt-44 mb-16">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-gray-800">PROJECTS</h1>
          <div className="border border-b-4 border-gray-400 w-16 ml-0.5 my-6"></div>
          <p className="text-xl font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            maximus mi nec sem sodales, eget pellentesque neque pulvinar.
            Phasellus sollicitudin erat sit amet tempus gravida. Nam in ex
            molestie. Cras a tellus fringilla, euismod nibh non, vehicula leo.
            Vestibulum tempor pharetra arcu sed rutrum. Donec efficitur aliquam
            dolor nec suscipit. Vivamus dui libero.
          </p>
        </div>
      </div>

      <Gallery items={projects} />
      <Footer />
    </>
  );
};

export default Projects;
