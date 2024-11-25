import * as React from 'react';

export function useHover() {
  const [hovered, setIsHovered] = React.useState(false);
  const ref = React.useRef(null);

  const handleRefMouseOver = () => {
    setIsHovered(true);
  };

  const handleRefMouseOut = () => {
    setIsHovered(false);
  };

  React.useEffect(() => {
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
