"use client"
import React from 'react'
import Image from 'next/image'
import { useInView } from "react-intersection-observer";
import type { ReducedImageProps } from '../types';
import { cn } from '../lib/utils';

const GalleryImage = ({data, index}: {data: ReducedImageProps, index: number}) => {

  const [inViewRef, isFullyInView] = useInView({
    threshold: 0.98
  });

  return (
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
        "first:ml-[25vw] last:mr-[25vw] w-auto h-auto md:min-h-[70vh] max-w-[calc(94vw-2rem)] max-h-[calc(100svh-4rem)] snap-center my-auto transition-opacity ease-out duration-300",
        !isFullyInView && "opacity-10 brightness-110"
      )}
    />
  )
}

export default GalleryImage