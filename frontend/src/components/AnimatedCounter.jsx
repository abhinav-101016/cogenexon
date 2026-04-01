import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function AnimatedCounter({ value, suffix = '', duration = 1600 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const end = parseInt(value, 10);
    const start = Date.now();
    const tick = () => {
      const pct = Math.min(1, (Date.now() - start) / duration);
      const ease = 1 - Math.pow(1 - pct, 3);
      setCount(Math.round(end * ease));
      if (pct < 1) requestAnimationFrame(tick);
    };
    tick();
  }, [inView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}
