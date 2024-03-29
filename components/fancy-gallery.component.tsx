import React, { useRef, useState } from 'react';

import Image from 'next/image';

import { FancyGalleryItem } from '@models/fancy-gallery-item.model';
import { correctImageUrl, useOutsideClick } from '@utils';

import CloseIcon from '../public/assets/cancel.svg';

interface FancyGalleryItemProps {
  fancyItems: FancyGalleryItem;
}

interface LightBoxItem {
  url: string;
  caption: string;
  width: number;
  height: number;
  alternativeText: string;
}

export const FancyGallery: React.FC<FancyGalleryItemProps> = ({
  fancyItems,
}) => {
  const [lightBoxOpen, setLightBoxOpen] = useState(false);
  const [lightBoxSource, setlightBoxSource] = useState<LightBoxItem>(
    {} as LightBoxItem
  );
  const overlay = useRef<HTMLImageElement>();
  const HIDDEN_OVERFLOW = 'overflow-hidden';

  const toggleLightBox = (image: LightBoxItem) => {
    const bodyClassList = document.body.classList;

    setLightBoxOpen(!lightBoxOpen);
    setlightBoxSource(image);

    !lightBoxOpen
      ? bodyClassList.add(HIDDEN_OVERFLOW)
      : bodyClassList.remove(HIDDEN_OVERFLOW);
  };

  const closeLightBox = () => toggleLightBox(null);

  useOutsideClick(overlay, closeLightBox, lightBoxOpen);

  return (
    <div className="my-12 flex flex-wrap">
      {fancyItems.images.map((item, i) => {
        const { formats, url, width, height, alternativeText, caption } = item;

        const lbItem: LightBoxItem = {
          url: correctImageUrl(formats.large?.url ?? url),
          width: formats.large?.width ?? width,
          height: formats.large?.height ?? height,
          alternativeText,
          caption,
        };

        return (
          <div className="w-full sm:w-1/2 lg:w-1/4 h-96 sm:h-72 relative" key={i}>
            <Image
              className="cursor-pointer"
              src={correctImageUrl(item.formats.small.url)}
              layout="fill"
              objectFit="cover"
              alt={item.alternativeText}
              onClick={() => toggleLightBox(lbItem)}
            />
          </div>
        );
      })}
      {lightBoxOpen && lightBoxSource && (
        <div className="fixed w-full h-full top-0 left-0 z-20 bg-black bg-opacity-80 flex flex-col justify-center">
          <img
            onKeyDown={() => toggleLightBox(null)}
            src={CloseIcon}
            width={30}
            height={30}
            alt="close modal"
            className="cursor-pointer self-end absolute top-0"
            onClick={() => toggleLightBox(null)}
            role="presentation"
          />
          <div className="mx-auto">
            <img
              src={lightBoxSource.url}
              width={lightBoxSource.width}
              height={lightBoxSource.height}
              ref={overlay}
              alt={lightBoxSource.alternativeText}
            />
            <p
              className="z-10 text-white text-center mt-3"
              style={{ maxWidth: lightBoxSource.width }}
            >
              {lightBoxSource.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
