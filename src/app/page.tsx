import React from 'react';
import { ImageProps } from './types';
import GalleryImage from './components/GalleryImage';

export default async function Home() {

  const response = await fetch('/api/cloudinary-images');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data: ImageProps[] = await response.json();

  return (
    <div className="h-full p-4 pb-20 flex flex-col gap-24 sm:p-20 font-[family-name:var(--font-geist-mono)] snap-y snap-mandatory">
      <header className='mb-2 snap-center text-center portrait:h-[50svh] landscape:h-[75svh] flex flex-col justify-center'>
        <h1 className='text-4xl sm:text-6xl md:text-8xl font-[family-name:var(--font-blackcasper)]'>
          <span className='text-purple-600'>Bla</span>
          <span className='text-purple-500'>zArD</span>
          <span className='text-purple-400'>sky&apos;s</span>
          {' '}
          <span className='text-yellow-600'>SpaCE</span>
        </h1>
        <p className='mt-4'>Digital Illustrations / Graphics</p>
      </header>
      <main className="h-screen snap-center snap-always">
        <div className='snap-mandatory snap-x gap-24 place-center grid grid-flow-col overflow-auto'>
          {data.map( res => <GalleryImage key={res.asset_id} data={res} />)}
        </div>
      </main>
      <footer className="snap-center mt-20 flex gap-1 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nicc-olo.com/?utm_source=blazardsky-gallery"
          target="_blank"
          rel="noopener noreferrer"
        >
          by Niccolò Agnoletti
        </a>
        <span>
          - IT02487460517 - 
        </span>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://shop.kipoproduzioni.it/?utm_source=nic"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kìpo Shop
        </a>
      </footer>
    </div>
  );
}
