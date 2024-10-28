// src/components/PinDisplay.tsx
import React from 'react';

interface Pin {
  x: number;
  y: number;
}

interface PinDisplayProps {
  pins: Pin[];
}

const PinDisplay: React.FC<PinDisplayProps> = ({ pins }) => {
  return (
    <div>
      <h3>Cumulative Pins:</h3>
      <div style={{ position: 'relative' }}>
        <img
          src="https://newtriton.ucsd.edu/_images/getting-around/map-screenshot.jpg" // Replace with your secondary image path
          alt="Cumulative Pins"
          style={{ width: '100%', height: 'auto' }} // Responsive size
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

export default PinDisplay;
