// src/components/ImageWithPins.tsx
import React, { useRef } from 'react';

interface Pin {
  x: number;
  y: number;
}

interface ImageWithPinsProps {
  pins: Pin[];
  setPins: React.Dispatch<React.SetStateAction<Pin[]>>;
}

const ImageWithPins: React.FC<ImageWithPinsProps> = ({ pins, setPins }) => {
  const imgRef = useRef<HTMLImageElement>(null);

  const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100; // Store as a percentage
    const y = ((event.clientY - rect.top) / rect.height) * 100; // Store as a percentage

    // Add the new pin to the local state (only for the primary image)
    setPins((prevPins) => [...prevPins, { x, y }]);
  };

  return (
    <div>
      <h2>Click on the primary image to add pins:</h2>
      <div style={{ position: 'relative' }}>
      <img
        ref={imgRef}
        src="https://newtriton.ucsd.edu/_images/getting-around/map-screenshot.jpg" // Replace with your primary image path
        alt="Clickable"
        style={{ cursor: 'pointer', width: '100%', height: 'auto', position: 'relative' }}
        onClick={handleImageClick}
      />
      {pins.map((pin, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: `${pin.x}%`, // Use percentage for positioning
            top: `${pin.y}%`, // Use percentage for positioning
            width: '10px',
            height: '10px',
            backgroundColor: 'red',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
      </div>
      
    </div>
  );
};

export default ImageWithPins;
