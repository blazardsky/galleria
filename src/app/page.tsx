import React from 'react';
import Gallery from '@/components/Gallery';
import GalleryWrapper from '@/components/GalleryWrapper';

export default async function Home() {

  // const galleryRef = React.useRef<HTMLElement>(null);
  // const scrollToGallery = () => {
  //   if (galleryRef.current) {
  //     galleryRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }; ref={galleryRef}


  return (
    <div className="h-full p-4 pb-20 flex flex-col gap-24 sm:p-16 font-[family-name:var(--font-geist-mono)] snap-y snap-mandatory place-center">
      <header className="text-center">
        <section className="mb-2 snap-center text-center portrait:h-[50svh] landscape:h-[75svh] flex flex-col justify-center">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-[family-name:var(--font-blackcasper)]">
            <span className="text-purple-600">Bla</span>
            <span className="text-purple-500">zArD</span>
            <span className="text-purple-400">sky&apos;s</span>{" "}
            <span className="text-yellow-600">SpaCE</span>
          </h1>
          <p className="mt-4">Digital Illustrations / Graphics</p>
        </section>
        <a href="#gallery" className="animate-bounce opacity-45 block">
          Scroll down
        </a>
      </header>

      <main className="h-screen snap-center snap-always pt-8" id="gallery">
        <GalleryWrapper />
      </main>

      <footer className="snap-center mt-20 flex gap-1 flex-wrap items-center justify-center text-sm">
        <span className="opacity-60">by</span>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nicc-olo.com/?utm_source=blazardsky-gallery"
          target="_blank"
          rel="noopener noreferrer"
        >
          Niccolò Agnoletti
        </a>
        <span className="opacity-60">
          © 2019-2026 All rights reserved - IT02487460517. (This website does
          not use cookies.)
        </span>
      </footer>
    </div>
  );
}
