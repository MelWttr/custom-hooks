import * as React from 'react';

export function Tab({ tabName, onCLick }) {
  return (
    <button className="tab" onClick={onCLick}>{tabName}</button>
  );
}
