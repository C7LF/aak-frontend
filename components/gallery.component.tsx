import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Routes } from '@enums';
import { GalleryItem } from '@models/gallery-item.model';
import { correctImageUrl } from '@utils';

interface GalleryItemProps {
  items: GalleryItem[];
}

export const Gallery: React.FC<GalleryItemProps> = ({ items }) => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
        {items.map((item: GalleryItem) => {
          const { url: imageURL } = item.image.formats.small ?? item.image;

          return (
            <div key={item.id} className="relative">
              <Link
                href={`${Routes.Projects}/[projectSlug]`}
                as={`${Routes.Projects}/${item.slug}`}
                passHref
              >
                <a>
                  <Image
                    src={`${correctImageUrl(imageURL)}`}
                    objectFit="cover"
                    layout="responsive"
                    width="auto"
                    height="200px"
                  />
                  <div
                    onMouseOver={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onFocus={() => void 0} // a11y
                    className={`${
                      hoveredId === item.id && 'opacity-100'
                    } opacity-0 absolute flex top-0 left-0 p-2 w-full h-full justify-center cursor-pointer text-gray-50 text-2xl items-center bg-black bg-opacity-50 transition ease-in-out duration-200`}
                  >
                    <span className="border-solid border-2 p-4 md:p-8 text-center border-gray-50">
                      {item.title}
                    </span>
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
