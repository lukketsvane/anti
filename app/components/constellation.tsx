
"use client";
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const Constellation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const crossCoords = [
      { x: 50, y: 25, href: "/star1" },
      { x: 25, y: 50, href: "/star2" },
      { x: 50, y: 50, href: "/star3" },
      { x: 75, y: 50, href: "/star4" },
      { x: 50, y: 75, href: "/star5" },
    ];

    crossCoords.forEach((coord, i) => {
      const star = document.createElement('a');
      star.style.position = 'fixed';  // Changed to 'fixed' to not affect layout
      star.style.left = `${coord.x}%`;
      star.style.top = `${coord.y}%`;
      star.style.width = '20px';
      star.style.height = '20px';
      star.style.backgroundColor = 'white';
      star.style.borderRadius = '50%';
      star.style.zIndex = '1';  // Set higher z-index
      star.href = coord.href;
      star.id = `star-${i}`;

      containerRef.current?.appendChild(star);
    });
  }, []);
  return (
    <div ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10 }}>

      {/* Other elements can go here if needed */}
    </div>
  );
};

export default Constellation;
