import { useEffect, useState } from 'react';

/**
 * Tracks the mouse position in viewport coordinates.
 * Used by the cursor glow and parallax effects.
 * Disabled automatically on touch-only devices.
 */
export default function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return undefined;

    const handleMove = (e) => {
      setIsActive(true);
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return { ...position, isActive };
}
