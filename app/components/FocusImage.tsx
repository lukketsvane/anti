// File: ./app/components/FocusImage.tsx

import React from 'react';

interface FocusImageProps {
  src: string;
  onClose: () => void;
}

const FocusImage: React.FC<FocusImageProps> = ({ src, onClose }) => {
  return (
    <div className="relative flex items-center justify-center">
      <img
        src={src}
        alt="Focus"
        className="object-cover w-full h-full"
      />
      <button
        className="absolute top-0 right-0 bg-white p-2 m-4 rounded"
        onClick={onClose}
      >
        X
      </button>
    </div>
  );
};

export default FocusImage;
