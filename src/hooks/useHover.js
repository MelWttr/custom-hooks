import { useRef, useState, useEffect } from 'react';

export function useHover() {
  const [hovered, setIsHovered] = useState(false);
  const ref = useRef(null);

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
