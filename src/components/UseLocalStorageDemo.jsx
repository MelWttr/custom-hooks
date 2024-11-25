import * as React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export function UseLocalStorageDemo() {
  const [value, { setItem, removeItem }] = useLocalStorage('some-key');
  return (
    <div>
      <p className='storage-title'>Значение из LocalStorage: {value}</p>
      <div className='storage-container'>
        <button onClick={() => setItem('new storage value')}>Задать значение</button>
        <button onClick={() => removeItem()}>Удалить значение</button>
      </div>
    </div>
  );
}
