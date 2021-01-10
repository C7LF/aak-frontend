import { Image } from '@models/image.model';

export interface SingleProject {
  id: number;
  slug: string;
  title: string;
  content: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  image: Image;
}
