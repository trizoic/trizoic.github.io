/* Adapted from React Bits by David Haz — MIT + Commons Clause. */
import { useRef } from 'react';

export default function SpotlightCard({ children, className = '', spotlightColor = 'rgba(111, 255, 211, 0.16)' }) {
  const cardRef = useRef(null);
  const handlePointerMove = (event) => {
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`);
    cardRef.current.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`);
    cardRef.current.style.setProperty('--spotlight-color', spotlightColor);
  };
  return <article ref={cardRef} onPointerMove={handlePointerMove} className={`spotlight-card ${className}`}>{children}</article>;
}

