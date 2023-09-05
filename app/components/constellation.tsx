// Constellation.tsx

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

interface Star {
  name: string;
  x: number;
  y: number;
}

const Constellation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const stars: Star[] = [
      { name: "Deneb", x: -6, y: 7 },
      { name: "Sadr", x: -3, y: 3 },
      { name: "Eta", x: 3, y: -2 },
      { name: "Albireo", x: 7, y: -8 },
      { name: "Gienha", x: -6, y: -2 },
      { name: "Zeta", x: -10, y: -5 },
      { name: "Fawaris", x: 4, y: 5 },
      { name: "Iota", x: 6, y: 9 },
      { name: "Cappa", x: 8, y: 10 },
    ];

    stars.forEach((star, i) => {
      const anchor = document.createElement('a');
      anchor.style.position = 'fixed';
      anchor.style.left = `calc(50% + ${star.x * 20}px)`;
      anchor.style.top = `calc(50% - ${star.y * 20}px)`;
      anchor.style.width = '10px';  // Made smaller
      anchor.style.height = '10px';  // Made smaller
      anchor.style.backgroundColor = 'white';
      anchor.style.borderRadius = '50%';
      anchor.style.zIndex = '1';
      anchor.href = `/${star.name.toLowerCase()}`;
      anchor.id = `star-${i}`;

      const label = document.createElement('span');
      label.textContent = star.name;
      label.style.position = 'absolute';
      label.style.bottom = '-20px';
      label.style.left = '50%';
      label.style.transform = 'translateX(-50%)';
      label.style.fontSize = '12px';
      label.style.color = 'white';

      anchor.appendChild(label);
      containerRef.current?.appendChild(anchor);
    });
  }, []);

  return (
    <div ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10 }}>
      {/* Other elements can go here if needed */}
    </div>
  );
};

export default Constellation;
