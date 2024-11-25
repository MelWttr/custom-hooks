import { useState } from 'react';
import { useWindowEvent } from './useWindowEvent';

interface Size {
  width: number,
  height: number,
}

export const useViewportSize = (): Size => {
  const [size, setSize] = useState<Size>(({
    width: window.innerWidth,
    height: window.innerHeight,
  }));

  const handleResize = (evt: UIEvent) => {
    const target = evt.target as Window;
    setSize({
      width: target.innerWidth,
      height: target.innerHeight,
  })
};
  useWindowEvent('resize', handleResize);

  return { height: size.height, width: size.width };
};
