// ./app/gallery/article.tsx

"use client";
import React from 'react';
import Image from 'next/image';

type GalleryArticleProps = {
  title: string;
  image: string;
  content: React.ReactNode;
  index: number;
  setFocusImage: (index: number | null) => void;
};

export const GalleryArticle: React.FC<GalleryArticleProps> = ({ title, image, content, index, setFocusImage }) => {
  return (
    <article className="flex flex-col items-center w-full p-2 animate-fade-in-up" onClick={() => setFocusImage(index)}>
      <div className="relative w-full pb-full hover:opacity-80 cursor-pointer">
        <div style={{ paddingTop: '100%' }}></div>
        <Image src={image} alt={title} objectFit="cover" layout="fill" className="absolute inset-0" />
      </div>
      <div className="prose prose-lg">{content}</div>
    </article>
  );
};
