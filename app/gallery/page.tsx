// ./app/gallery/page.tsx

"use client";
import React, { useState, useEffect } from 'react';
import { allGalleryImages } from 'contentlayer/generated';
import { GalleryArticle } from './article';
import Image from 'next/image';

const GalleryPage = () => {
  const [focusImage, setFocusImage] = useState<number | null>(null);

  const handleKeyDown = (event: globalThis.KeyboardEvent) => {
    if (focusImage === null) return;

    if (event.key === 'ArrowRight' && focusImage < allGalleryImages.length - 1) {
      setFocusImage(focusImage + 1);
    }
    if (event.key === 'ArrowLeft' && focusImage > 0) {
      setFocusImage(focusImage - 1);
    }
    if (event.key === 'Escape') {
      setFocusImage(null);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown as EventListener);
    return () => {
      document.removeEventListener('keydown', handleKeyDown as EventListener);
    };
  }, [focusImage]);

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {allGalleryImages?.map((imageData, index) => (
        <div key={imageData._id} className="rounded-lg overflow-hidden shadow-lg">
          <GalleryArticle 
            title={imageData.title} 
            image={imageData.image} 
            content={imageData.description}
            index={index}
            setFocusImage={setFocusImage}
          />
        </div>
      )) ?? 'No images found.'}

      {focusImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-10 bg-black bg-opacity-50" onClick={() => setFocusImage(null)}>
          <div className="relative max-w-full max-h-full w-2/3 h-2/3">
            <Image src={allGalleryImages[focusImage].image} alt={allGalleryImages[focusImage].title} objectFit="contain" layout="fill" />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
