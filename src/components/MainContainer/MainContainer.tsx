'use client';

import {
  ColorSelection,
  FontSelection,
  SizeSelection,
  TextDisplay,
  TextEditing,
} from '../ui';
import React, { useState } from 'react';

import { ScreenCaptureComponent } from '../ScreenCaptureComponent';
import { WebcamComponent } from '../WebCamComponent';

export const MainContainer: React.FC = () => {
  const [text, setText] = useState('New Text');
  const [font, setFont] = useState('Arial');
  const [size, setSize] = useState(16);
  const [color, setColor] = useState('#000000');

  const handleUndo = () => {
    // Implement undo logic
  };

  const handleRedo = () => {
    // Implement redo logic
  };

  return (
    <div className='flex flex-col h-screen p-4 bg-gray-100'>
      <div className='flex justify-between mb-4'>
        <h1 className='text-xl font-bold'>Edit Hub</h1>
        <div>
          <button
            onClick={handleUndo}
            className='border p-2 mr-2 bg-white hover:bg-gray-200'
          >
            Undo
          </button>
          <button
            onClick={handleRedo}
            className='border p-2 bg-white hover:bg-gray-200'
          >
            Redo
          </button>
        </div>
      </div>
      <div className='flex flex-grow'>
        <div className='flex flex-col w-3/4 p-4 border bg-white shadow-lg'>
          <ScreenCaptureComponent />
          <TextDisplay text={text} font={font} size={size} color={color} />
        </div>
        <div className='flex flex-col w-1/4 p-4 bg-white shadow-lg ml-4'>
          <TextEditing text={text} setText={setText} />
          <FontSelection font={font} setFont={setFont} />
          <SizeSelection size={size} setSize={setSize} />
          <ColorSelection color={color} setColor={setColor} />
          <button className='border p-2 mt-2 bg-blue-500 text-white hover:bg-blue-600'>
            Add Text
          </button>
        </div>
      </div>
      <WebcamComponent />
    </div>
  );
};
