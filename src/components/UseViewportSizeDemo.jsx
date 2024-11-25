import React from 'react';
import { useViewportSize } from '../hooks/useViewportSize';

export function UseViewportSizeDemo() {
  const { height, width } = useViewportSize();

  return (
    <>
      Width: {width}, height: {height}
    </>
  );
}
