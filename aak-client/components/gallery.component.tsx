import { GalleryItem } from '@models/gallery-item.model';
import Image from 'next/image';
import React from 'react';

interface GalleryItemProps {
  items: GalleryItem[];
}

export const Gallery: React.FC<GalleryItemProps> = ({ items }) => {
  return (
    <div className="container mx-auto">
      {items.map((item: GalleryItem) => {
        const { url, width, height } = item.image.formats.small;
        return (
          <>
            <Image
              src={`http://localhost:1337${url}`}
              width={width}
              height={height}
              className="absolute top-0 right-0 bottom-0 left-0 object-cover"
            />
            <span>{item.title}</span>
          </>
        );
      })}
    </div>
  );
};
