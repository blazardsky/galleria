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
    <div className="p-4 pb-20 sm:p-16 font-(family-name:--font-geist-mono) snap-y snap-proximity">
      <header className="snap-center snap-normal text-center grid justify-items-center items-end h-[90svh]">
        <section className="mb-2 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-(family-name:--font-blackcasper)">
            <span className="text-purple-600">Bla</span>
            <span className="text-purple-500">zArD</span>
            <span className="text-purple-400">sky&apos;s</span>{" "}
            <span className="text-yellow-600">SpaCE</span>
          </h1>
          <p className="mt-4">Digital Illustrations / Graphics</p>
        </section>
        <a href="#gallery" className="h-auto animate-bounce opacity-45 block self-end">
          Scroll down
        </a>
      </header>

      <main className="h-full min-h-dvh snap-center snap-always flex flex-col place-content-center" id="gallery">
        <GalleryWrapper />
      </main>

      <footer className="h-auto snap-start pt-20 text-sm text-center">
        <span className="opacity-60">by</span>
        {' '}
        <a
          className="inline hover:underline hover:underline-offset-4"
          href="https://nicc-olo.com/?utm_source=blazardsky-gallery"
          target="_blank"
          rel="noopener noreferrer"
        >
          Niccolò Agnoletti
        </a>
        {' '}
        <span className="opacity-60">
          © 2019-2026 All rights reserved - IT02487460517. (This website does
          not use cookies.)
        </span>
      </footer>
    </div>
  );
}
