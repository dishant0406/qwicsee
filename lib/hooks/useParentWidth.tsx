'use client'

import { useState, useEffect, useRef } from 'react';

const useParentWidth = () => {
  const [width, setWidth] = useState({ px: 0, vw: 0, rem: 0 });
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const px = entry.contentRect.width;
        const vw = Math.ceil((px / window.innerWidth) * 100)
        const rem = px / parseFloat(getComputedStyle(document.documentElement).fontSize);
        setWidth({ px, vw, rem });
      }
    });

    resizeObserver.observe(element);

    return () => resizeObserver.disconnect();
  }, []);

  return { ref, width }
};

export default useParentWidth;
