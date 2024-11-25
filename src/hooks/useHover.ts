import { useState, useRef, useEffect } from 'react';

export function useHover<T extends HTMLElement>() {
  const [hovered, setIsHovered] = useState<boolean>(false);
  const ref = useRef<T | null>(null);

  const handleRefMouseOver = () => {
    setIsHovered(true);
  };

  const handleRefMouseOut = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener('mouseover', handleRefMouseOver);
      element.addEventListener('mouseout', handleRefMouseOut);

      return () => {
        element.removeEventListener('mouseover', handleRefMouseOver);
        element.removeEventListener('mouseout', handleRefMouseOut);
      };
    }
  }, []);

  return { hovered, ref };
}
