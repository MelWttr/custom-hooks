import React, { MouseEventHandler } from 'react';

interface TabProps {
  tabName: string,
  onClick: MouseEventHandler<HTMLButtonElement>
}

export function Tab({ tabName, onClick }: TabProps): JSX.Element {
  return (
    <button className="tab" onClick={onClick}>{tabName}</button>
  );
}
