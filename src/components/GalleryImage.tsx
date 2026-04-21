"use client"
import Image from 'next/image'
import { useInView } from "react-intersection-observer";
import type { ReducedImageProps } from '../types';
import { cn } from '../lib/utils';

const GalleryImage = ({data, index}: {data: ReducedImageProps, index: number}) => {

  const [inViewRef, isFullyInView] = useInView({
    threshold: 0.9
  });

  return (
    <figure 
    className={cn(
      "relative mx-auto block w-fit h-fit",
      isFullyInView && "bg-neutral-100 border-16 border-taupe-800 inset-shadow-sm inset-shadow-mist-600 p-4 md:p-8 lg:p-16",
      isFullyInView && "after:absolute after:top-0 after:left-0 after:block after:w-full after:h-full after:border-16 after:border-double after:border-taupe-400")}>
    <Image
      width={data.width}
      height={data.height}
      sizes="100vw"
      src={data.secure_url} 
      alt={''}
      quality={75}
      ref={inViewRef}
      style={{aspectRatio: data.aspect_ratio}}
      loading={index > 1 ? 'lazy' : 'eager'}
      placeholder='blur'
      blurDataURL={data.blurDataUrl}
      className={cn(
        "mx-auto transition-all ease-out duration-600 motion-reduce:duration-0",
        "w-full h-auto max-h-[70svh]",
        !isFullyInView && "motion-safe:opacity-5 brightness-110",
        isFullyInView && "border border-mist-200 inset-shadow-xs inset-shadow-mist-300"
        
      )}
    />
    </figure>
  )
}

export default GalleryImage