// ./app/gallery/article.tsx

"use client";

import React from 'react';
import Image from 'next/image';

type GalleryArticleProps = {
  title: string;
  image: string;
  content: React.ReactNode;
};

export const GalleryArticle: React.FC<GalleryArticleProps> = ({ title, image, content }) => {
  return (
    <article className="flex flex-col items-center w-full p-2">
      <div className="relative w-full pb-full">
        <div style={{ paddingTop: '100%' }}></div>
        <Image src={image} alt={title} objectFit="cover" layout="fill" className="absolute inset-0" />
      </div>
      <div className="prose prose-lg">{content}</div>
    </article>
  );
};
