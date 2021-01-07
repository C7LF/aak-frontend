import { GalleryItem } from '@models/gallery-item.model';
import Image from 'next/image';
import React, { useState } from 'react';

interface GalleryItemProps {
  items: GalleryItem[];
}

export const Gallery: React.FC<GalleryItemProps> = ({ items }) => {
  const [isHovered, setHover] = useState(false);

  return (
    <div className="container mx-auto">
      {items.map((item: GalleryItem) => {
        const { url, width, height } = item.image.formats.small;
        return (
          <div key={item.id} className="w-1/3 lg:my-2 relative">
            <Image
              src={`http://localhost:1337${url}`}
              layout="responsive"
              width={width}
              height={height}
            />
            <div
              onMouseOver={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onFocus={() => void 0} // a11y
              className={`${
                isHovered && 'opacity-100'
              } opacity-0 absolute flex top-0 left-0 p-2 w-full h-full justify-center cursor-pointer text-gray-50 text-2xl items-center bg-black bg-opacity-50 transition ease-in-out duration-200`}
            >
              <span className="border-solid border-2 py-8 px-12 border-gray-50">
                {item.title}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
