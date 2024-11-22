import { useState } from 'react';
import { useWindowEvent } from './useWindowEvent';

export const useViewportSize = () => {
  const [size, setSize] = useState(({
    width: window.innerWidth,
    height: window.innerHeight,
  }));

  const handleResize = ({ target }) => setSize({
    width: target.innerWidth,
    height: target.innerHeight,
  });
  useWindowEvent('resize', handleResize);

  return { height: size.height, width: size.width };
};
