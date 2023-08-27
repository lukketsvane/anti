// File: ./app/gallery/gallery.tsx

import React, { useState, useEffect } from 'react';
import fs from 'fs';
import path from 'path';
import dynamic from 'next/dynamic';
import SwipeableViews from 'react-swipeable-views';

const FocusImage = dynamic(() => import('../components/FocusImage'), {
  ssr: false,
});

export default function Gallery() {
  const [imageData, setImageData] = useState([]);
  const [focusIndex, setFocusIndex] = useState(null);

  useEffect(() => {
    fs.readdir('./content/gallery', (err, files) => {
      if (err) {
        console.error(err);
        return;
      }
      const imgData = files.map((file) => {
        const filePath = path.join('./content/gallery', file);
        const isDirectory = fs.lstatSync(filePath).isDirectory();
        return isDirectory
          ? { type: 'folder', name: file, path: filePath }
          : { type: 'image', name: file, path: filePath };
      });
      setImageData(imgData);
    });
  }, []);

  const handleImageClick = (index) => {
    setFocusIndex(index);
  };

  const handleClose = () => {
    setFocusIndex(null);
  };

  return (
    <div className="container mx-auto grid grid-cols-4 gap-4">
      {imageData.map((img, index) => (
        <div key={index} onClick={() => handleImageClick(index)}>
          <img
            src={img.path}
            alt={img.name}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
      {focusIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <SwipeableViews index={focusIndex} onChangeIndex={setFocusIndex}>
            {imageData.map((img, index) => (
              <div key={index}>
                <FocusImage src={img.path} onClose={handleClose} />
              </div>
            ))}
          </SwipeableViews>
          <button className="absolute top-0 right-0 m-4" onClick={handleClose}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}
