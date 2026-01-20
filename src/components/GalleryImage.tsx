"use client"
import React from 'react'
import Image from 'next/image'
import { useInView } from "react-intersection-observer";
import type { ReducedImageProps } from '../types';
import { cn } from '../lib/utils';

const GalleryImage = ({data, index}: {data: ReducedImageProps, index: number}) => {

  const [inViewRef, isFullyInView] = useInView({
    threshold: 0.9
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
        "w-auto h-auto mx-auto portrait:md:min-h-[70vh] max-w-[calc(100vw-5rem)] sm:max-w-[calc(100vw-8rem)] max-h-[calc(100svh-4rem)] transition-opacity ease-out duration-300",
        !isFullyInView && "opacity-10 brightness-110"
      )}
    />
  )
}

export default GalleryImage