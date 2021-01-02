import React from 'react';

// array of project items:
// id, imageUrl, Title

// interface GalleryProps {
//   id: number;
//   title: string;
//   image: string;
// }

export const Gallery: React.FC<unknown> = (projects) => {
  return <p>Gallery! {projects}</p>;
};
