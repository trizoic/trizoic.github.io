/* Adapted from React Bits by David Haz — MIT + Commons Clause. */
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export default function BlurText({ text, className = '', delay = 110, as: Tag = 'p' }) {
  const words = text.split(' ');
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, index) => (
        <motion.span
          className="blur-word"
          key={`${word}-${index}`}
          initial={{ filter: 'blur(14px)', opacity: 0, y: 36 }}
          animate={visible ? { filter: 'blur(0px)', opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, delay: index * delay / 1000, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}{index < words.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </Tag>
  );
}

