import React from 'react';
import { useToggle } from '../hooks/useToggle';

const colors = ['red', 'green', 'blue', 'violet', 'orange'];

export const UseToggleDemo = () => {
  const { value, toggle } = useToggle(colors);
  const { value: boolean, toggle: toggleBoolean } = useToggle();

  return (
    <div >
      <p className='toggle-colors'>Цвета:
        {colors.map((color) => <span key={color} style={{ color }}>{color}</span>)}
      </p>
      <div className="toggle-btns">
        <button onClick={() => toggle()}>Следующий</button>
        <button onClick={() => toggle('green')}>Выбрать зеленый</button>
      </div>
      <button
        className='toggle-result'
        style={{
          borderRadius: boolean ? '100%' : '0',
          backgroundColor: value,
        }}
        onClick={() => toggleBoolean()}>
          Кликни меня
        </button>
    </div>
  );
};
