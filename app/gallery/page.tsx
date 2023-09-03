// ./app/gallery/page.tsx
"use client";
import React, { useState, useEffect, KeyboardEvent } from 'react';
import { allGalleryImages } from 'contentlayer/generated';
import { GalleryArticle } from './article';
import Image from 'next/image';

const GalleryPage = () => {
  const [focusImage, setFocusImage] = useState<number | null>(null);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowRight' && focusImage !== null && focusImage < allGalleryImages.length - 1) {
      setFocusImage(focusImage + 1);
    }
    if (event.key === 'ArrowLeft' && focusImage !== null && focusImage > 0) {
      setFocusImage(focusImage - 1);
    }
    if (event.key === 'Escape') {
      setFocusImage(null);
    }
  };



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
          <div className="relative w-full h-full">
            <Image 
              src={allGalleryImages[focusImage].image} 
              alt={allGalleryImages[focusImage].title} 
              objectFit="contain" 
              layout="fill" 
            />
          </div>
        </div>
      )}
    </div>
  );
};


export default GalleryPage;
