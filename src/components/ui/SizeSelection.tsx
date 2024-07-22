import React from 'react';

interface SizeSelectionProps {
  size: number;
  setSize: (size: number) => void;
}

export const SizeSelection: React.FC<SizeSelectionProps> = ({
  size,
  setSize,
}) => {
  return (
    <input
      type='number'
      value={size}
      onChange={e => setSize(Number(e.target.value))}
      className='border p-2 mb-2'
      placeholder='Font size'
    />
  );
};
