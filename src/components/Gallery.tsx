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
  const nextRef = React.useRef<HTMLButtonElement>(null);
  const prevRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevRef.current?.click();
      } else if (event.key === "ArrowRight") {
        nextRef.current?.click();
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
      <CarouselPrevious ref={prevRef} className="@max-md:right-[calc(100% - 5rem)] @max-md:top-full" />
      <CarouselNext ref={nextRef} className="@max-md:right-0 @max-md:top-full" />
    </Carousel>
  );
}
