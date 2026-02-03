"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import GalleryImage from "@/components/GalleryImage";
import type { ReducedImageProps } from "@/types";

export default function Gallery({
  images,
}: {
  images: ReducedImageProps[];
}) {
  const [inViewRef, isFullyInView] = useInView({
    threshold: 0.8,
  });

  return (
    <Carousel
      ref={inViewRef}
      opts={{
        align: "start",
        loop: true,
        dragFree: false,
        containScroll: "keepSnaps",
      }}
      className={cn(
        "w-full max-w-5xl mx-auto",
        isFullyInView && "gallery_visible",
      )}
    >
      <CarouselContent className="flex place-items-center">
        {images.map((data, index) => (
          <CarouselItem key={data.asset_id}>
            <GalleryImage index={index} data={data} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
