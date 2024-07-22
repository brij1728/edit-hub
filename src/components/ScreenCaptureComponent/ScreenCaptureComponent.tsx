import React, { useState } from 'react';

import Image from 'next/image';

export const ScreenCaptureComponent: React.FC = () => {
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
    <div className='flex flex-col justify-center items-center h-full'>
      {image && imageDimensions ? (
        <Image
          src={image}
          alt='Uploaded'
          width={imageDimensions.width}
          height={imageDimensions.height}
          className='max-w-full max-h-full'
        />
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
