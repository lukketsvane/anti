import React, { useEffect, useRef } from 'react';

const Constellation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const stars = [
      { name: "Deneb", x: -6, y: 7, href: "/Deneb" },
      { name: "Sadr", x: -3, y: 3, href: "/Sadr" },
      { name: "Eta", x: 3, y: -2, href: "/Eta" },
      { name: "Albireo", x: 7, y: -8, href: "/Albireo" },
      { name: "Gienha", x: -6, y: -2, href: "/Gienha" },
      { name: "Zeta", x: -10, y: -5, href: "/Zeta" },
      { name: "Fawaris", x: 4, y: 5, href: "/Fawaris" },
      { name: "Iota", x: 6, y: 9, href: "/Iota" },
      { name: "Cappa", x: 8, y: 10, href: "/Cappa" }
    ];

    stars.forEach((star, i) => {
      const anchor = document.createElement('a');
      anchor.style.position = 'fixed';
      anchor.style.left = `calc(40% + ${star.x * 20}px)`; // Adjusted horizontal position
      anchor.style.top = `calc(30% - ${star.y * 20}px)`; // Adjusted vertical position
      anchor.style.width = '10px';
      anchor.style.height = '10px';
      anchor.style.backgroundColor = 'transparent';
      anchor.style.pointerEvents = 'auto';
      anchor.style.zIndex = '11';
      anchor.href = star.href;
      anchor.id = `star-${i}`;

      const dot = document.createElement('div');
      dot.style.width = '2.5px';
      dot.style.height = '2.5px';
      dot.style.backgroundColor = 'white';
      dot.style.borderRadius = '50%';

      const nameSpan = document.createElement('span');
      nameSpan.textContent = star.name;
      nameSpan.style.color = 'white'; // Set text color to white
      nameSpan.style.opacity = '0';
      nameSpan.style.transition = 'opacity 0.5s ease';
      nameSpan.style.position = 'absolute';
      nameSpan.style.left = '50%';
      nameSpan.style.bottom = '-20px';
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

      containerRef.current?.appendChild(anchor);
    });
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        position: 'fixed', 
        top: '-40%', // Moved the component further up
        left: '-10%', // Moved the component more to the left
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
