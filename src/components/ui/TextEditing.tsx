import React from 'react';

interface TextEditingProps {
  text: string;
  setText: (text: string) => void;
}

export const TextEditing: React.FC<TextEditingProps> = ({ text, setText }) => {
  return (
    <input
      type='text'
      value={text}
      onChange={e => setText(e.target.value)}
      className='border p-2 mb-2 w-full'
      placeholder='Edit text'
    />
  );
};
