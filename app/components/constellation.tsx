"use client";

import React, { useEffect, useRef } from 'react';
import Link from "next/link";

interface ConstellationProps {
    darkMode: boolean;
    disableLinks?: boolean;
  }
  
const Constellation: React.FC<ConstellationProps> = ({ darkMode, disableLinks }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (darkMode) {
      const stars = [
        { name: "Deneb", x: -5.4, y: 6.3, href: "/Deneb" },    
        { name: "Sadr", x: -2.7, y: 2.7, href: "/Sadr" },
        { name: "Eta", x: 2.7, y: -1.8, href: "/Eta" },
        { name: "Albireo", x: 6.3, y: -7.2, href: "/Albireo" },
        { name: "Gienha", x: -5.4, y: -1.8, href: "/Gienha" },
        { name: "Zeta", x: -9, y: -4.5, href: "/Zeta" },
        { name: "Fawaris", x: 3.6, y: 4.5, href: "/Fawaris" },
        { name: "Iota", x: 5.4, y: 8.1, href: "/Iota" },
        { name: "Cappa", x: 7.2, y: 9, href: "https://anti.exposed/" }
      ];

      stars.forEach((star, i) => {
        const anchor = document.createElement('a');
        anchor.style.position = 'fixed';
        anchor.style.left = `calc(40% + ${star.x * 18}px)`;
        anchor.style.top = `calc(30% - ${star.y * 18}px)`;
        anchor.style.width = '30px';
        anchor.style.height = '30px';
        anchor.style.backgroundColor = 'transparent';
        anchor.style.pointerEvents = disableLinks ? 'none' : 'auto';
        anchor.style.zIndex = '11';
        anchor.id = `star-${i}`;

        const dot = document.createElement('div');
        dot.style.width = '2.25px';
        dot.style.height = '2.25px';
        dot.style.backgroundColor = 'white';
        dot.style.borderRadius = '50%';
        dot.style.position = 'absolute';
        dot.style.left = '50%';
        dot.style.top = '50%';
        dot.style.transform = 'translate(-50%, -50%)';

        const nameSpan = document.createElement('span');
        nameSpan.textContent = star.name;
        nameSpan.style.color = 'white';
        nameSpan.style.fontSize = '10px';
        nameSpan.style.fontWeight = '300';
        nameSpan.style.opacity = '0';
        nameSpan.style.transition = 'opacity 1.0s ease';
        nameSpan.style.position = 'absolute';
        nameSpan.style.left = '50%';
        nameSpan.style.top = '-10px';
        nameSpan.style.transform = 'translate(-50%, 0)';
        nameSpan.style.whiteSpace = 'nowrap';

        anchor.appendChild(dot);
        anchor.appendChild(nameSpan);

        anchor.addEventListener('mouseenter', () => {
          nameSpan.style.opacity = '1';
        });

        anchor.addEventListener('mouseleave', () => {
          nameSpan.style.opacity = '0';
        });

        if (star.name === 'Deneb') {
          anchor.addEventListener('click', (e) => {
            e.preventDefault();
            dot.style.transition = 'width 0.5s ease, height 0.5s ease';
            dot.style.width = '200.75px';
            dot.style.height = '200.75px';

            setTimeout(() => {
              dot.style.transition = 'width 0.2s ease, height 0.2s ease';
              dot.style.width = '3000px';
              dot.style.height = '3000px';
            }, 500);

            setTimeout(() => {
              window.location.href = star.href;
            }, 600);
          });
        } else if (star.href && !disableLinks) {
          anchor.addEventListener('click', () => {
            window.location.href = star.href;
          });
        }

        containerRef.current?.appendChild(anchor);
      });
    }
  }, [darkMode, disableLinks]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: '-40%',
        left: '-10%',
        width: '100%',
        height: '100%',
        zIndex: 10,
        pointerEvents: 'none'
      }}
    >
    </div>
  );
};



export default Constellation;
