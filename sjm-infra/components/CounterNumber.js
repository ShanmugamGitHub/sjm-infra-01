'use client';

import { useEffect, useState } from 'react';

export default function CounterNumber({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // easeOutQuart curve
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    
    // Slight delay to ensure element is in view before starting
    const timeoutId = setTimeout(() => {
        window.requestAnimationFrame(step);
    }, 300);
    
    return () => clearTimeout(timeoutId);
  }, [end, duration]);

  return <span>{count}</span>;
}

