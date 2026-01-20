import type { ImageProps, ReducedImageProps } from '@/types';
import { getPlaceholderBlurData } from '@/lib/utils';
import Gallery from './Gallery';

export default async function GalleryWrapper() {

  const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/cloudinary-images/`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const gallery: ImageProps[] = await response.json();
  const reducedGallery: ReducedImageProps[] = [];

  const blurImagePromises = gallery.map((image: ImageProps) => {
    return getPlaceholderBlurData(image);
  });
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);
  
  let i = 0;
  for (const image of gallery) {
    reducedGallery.push({
      asset_id: image.asset_id,
      height: image.height,
      width: image.width,
      public_id: image.public_id,
      format: image.format,
      aspect_ratio: image.aspect_ratio,
      secure_url: image.secure_url,
      blurDataUrl: imagesWithBlurDataUrls[i]
    });
    i++;
  }

  return (
    <Gallery images={reducedGallery} />
  );
}




