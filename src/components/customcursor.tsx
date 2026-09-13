import { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener(
        'mouseleave',
        handleMouseLeave
      );
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${visible ? 'cursor-visible' : ''}`}
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      {/* Nucleus */}
      <div className="cursor-nucleus" />

      {/* Atomic shells */}
      <div className="cursor-orbit orbit-one">
        <span className="cursor-electron electron-one" />
      </div>

      <div className="cursor-orbit orbit-two">
        <span className="cursor-electron electron-two" />
      </div>

      <div className="cursor-orbit orbit-three">
        <span className="cursor-electron electron-three" />
      </div>
    </div>
  );
};