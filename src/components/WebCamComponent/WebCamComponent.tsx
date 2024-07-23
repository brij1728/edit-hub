import React from 'react';
import Webcam from 'react-webcam';

export const WebCamComponent: React.FC = () => {
  const webcamRef = React.useRef<Webcam>(null);

  return (
    <div className='fixed bottom-4 right-4 border border-gray-400 rounded'>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat='image/jpeg'
        className='w-32 h-32'
      />
    </div>
  );
};
