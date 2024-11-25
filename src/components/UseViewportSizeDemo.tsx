import React from 'react';
import { useViewportSize } from '../hooks/useViewportSize';

export function UseViewportSizeDemo(): JSX.Element {
  const { height, width } = useViewportSize();

  return (
    <>
      Width: {width}, height: {height}
    </>
  );
}
