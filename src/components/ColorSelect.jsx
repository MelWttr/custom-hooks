import React from 'react';

const ColorSelect = ({ onChange, value, colors }) => {
  const handleChange = (evt) => {
    onChange(evt.target.value);
  };

  return (
    <div>
      <label htmlFor="color-select" style={{ display: 'block', marginBottom: '8px' }}>
        Выберите цвет:
      </label>
      <select
        id="color-select"
        value={value}
        onChange={handleChange}
        style={{
          padding: '8px',
          fontSize: '16px',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
        }}
      >
        {colors.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>

      <div
        style={{
          marginTop: '16px',
          width: '100px',
          height: '100px',
          backgroundColor: value,
          border: '1px solid #000',
        }}
      >
        <p style={{ textAlign: 'center', color: '#fff', lineHeight: '100px' }}>
          {value}
        </p>
      </div>
    </div>
  );
};

export default ColorSelect;
