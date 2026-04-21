import 'server-only';
import cloudinary from 'cloudinary';
import type { ImageProps } from '@/types';

cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function getCloudinaryGalleryImages(): Promise<ImageProps[]> {
  const { resources } = await cloudinary.v2.search
    .expression('resource_type:image AND folder:gallery-watermarked')
    .sort_by('public_id', 'desc')
    .max_results(50)
    .execute();
  return resources as ImageProps[];
}
