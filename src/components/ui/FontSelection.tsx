import React from 'react';

interface FontSelectionProps {
  font: string;
  setFont: (font: string) => void;
}

export const FontSelection: React.FC<FontSelectionProps> = ({
  font,
  setFont,
}) => {
  return (
    <select
      value={font}
      onChange={e => setFont(e.target.value)}
      className='border p-2 mb-2 w-full'
    >
      <option value='Arial'>Arial</option>
      <option value='Helvetica'>Helvetica</option>
      <option value='Times New Roman'>Times New Roman</option>
    </select>
  );
};
