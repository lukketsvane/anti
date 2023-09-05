// ./pages/Deneb.tsx
import React, { useEffect, useState } from 'react';

const Deneb: React.FC = () => {
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    setExpand(true);
  }, []);

  return (
    <div 
      style={{
        backgroundColor: 'white',
        position: 'fixed',
        borderRadius: '50%',
        left: 'calc(40% - 5.4 * 18px)',
        top: 'calc(30% + 6.3 * 18px)',
        width: expand ? '200vw' : '9px',
        height: expand ? '200vh' : '9px',
        transition: 'width 1s ease, height 1s ease',
        zIndex: 20
      }}
    >
    </div>
  );
};

export default Deneb;
