import React from 'react';

interface ColorSelectionProps {
  color: string;
  setColor: (color: string) => void;
}

export const ColorSelection: React.FC<ColorSelectionProps> = ({
  color,
  setColor,
}) => {
  return (
    <input
      type='color'
      value={color}
      onChange={e => setColor(e.target.value)}
      className='border p-2 mb-2'
    />
  );
};
