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
    <article className="flex flex-col items-center w-full animate-fade-in-up" onClick={() => setFocusImage(index)}>
      <div className="gallery-item relative w-full overflow-hidden rounded-lg" style={{ paddingBottom: '113.33%' }}> {/* Aspect ratio 3:4 */}
        <Image src={image} alt={title} objectFit="cover" layout="fill" className="absolute inset-0 transition-transform duration-300 hover:scale-105" />
      </div>
      <div className="prose">{content}</div>
    </article>
  );
};
