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
    <div className="flex flex-wrap items-center justify-center">
      {allGalleryImages?.map((imageData, index) => (
        <div key={imageData._id} className="w-full p-2 sm:w-1/2 md:w-1/4 lg:w-1/4">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-10 bg-black bg-opacity-70" onClick={() => setFocusImage(null)}>
          <Image src={allGalleryImages[focusImage].image} alt={allGalleryImages[focusImage].title} objectFit="contain" layout="fill" className="w-full h-full" />
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
