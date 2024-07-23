'use client';

import React, { useState } from 'react';

import Image from 'next/image';

interface TextElement {
  id: number;
  text: string;
  font: string;
  size: number;
  color: string;
}

interface ScreenCaptureComponentProps {
  textElements: TextElement[];
  removeTextElement: (id: number) => void;
}

export const ScreenCaptureComponent: React.FC<ScreenCaptureComponentProps> = ({
  textElements,
  removeTextElement,
}) => {
  const [image, setImage] = useState<string | null>(null);
  const [imageDimensions, setImageDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      const img = new window.Image(); // Ensure to use window.Image for the browser context

      img.onload = () => {
        setImageDimensions({ width: img.width, height: img.height });
      };

      reader.onload = e => {
        if (e.target && typeof e.target.result === 'string') {
          img.src = e.target.result;
          setImage(e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='relative flex flex-col justify-center items-center h-full'>
      {image && imageDimensions ? (
        <div className='relative'>
          <Image
            src={image}
            alt='Uploaded'
            width={imageDimensions.width}
            height={imageDimensions.height}
            className='max-w-full max-h-full'
          />
          {textElements.map(element => (
            <div
              key={element.id}
              style={{
                position: 'absolute',
                fontFamily: element.font,
                fontSize: `${element.size}px`,
                color: element.color,
                cursor: 'pointer',
              }}
              onClick={() => removeTextElement(element.id)}
            >
              {element.text}
            </div>
          ))}
        </div>
      ) : (
        <p>Screen Capture Component (Placeholder)</p>
      )}
      <input
        type='file'
        accept='image/*'
        onChange={handleImageUpload}
        className='mt-4'
      />
    </div>
  );
};
