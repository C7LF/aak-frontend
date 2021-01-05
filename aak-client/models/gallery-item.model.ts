import { Image } from '@models/image.model';

export interface GalleryItem {
  id: number;
  title: string;
  image: Image;
}
