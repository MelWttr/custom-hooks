import * as React from 'react';
import { useHover } from '../hooks/useHover';

export function UseHoverDemo() {
  const { hovered, ref } = useHover();

  return (
      <button ref={ref}>
        {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
      </button>
  );
}
