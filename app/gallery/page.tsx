// ./app/gallery/page.tsx

import React from 'react';
import { allGalleryImages } from 'contentlayer/generated';
import { GalleryArticle } from './article';

const GalleryPage = () => {
  return (
    <div className="flex flex-wrap items-center justify-center">
      {allGalleryImages?.map((imageData) => (
        <div key={imageData._id} className="w-full p-2 sm:w-1/2 md:w-1/4 lg:w-1/4">
          <GalleryArticle 
            title={imageData.title} 
            image={imageData.image} 
            content={imageData.description} 
          />
        </div>
      )) ?? 'No images found.'}
    </div>
  );
};

export default GalleryPage;