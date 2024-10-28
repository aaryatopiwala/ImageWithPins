// src/App.tsx
import React, { useState } from 'react';
import ImageWithPins from './components/ImageWithPins';
import PinDisplay from './components/PinDisplay';

const App: React.FC = () => {
  const [primaryPins, setPrimaryPins] = useState<{ x: number; y: number }[]>([]);
  const [cumulativePins, setCumulativePins] = useState<{ x: number; y: number }[]>([]);

  const handleSubmit = () => {
    // Update cumulative pins with current primary pins
    setCumulativePins((prevPins) => [...prevPins, ...primaryPins]);
    
    // Clear primary pins
    setPrimaryPins([]);
  };

  return (
    <div>
      <h1>Pin Submission App</h1>
      <ImageWithPins pins={primaryPins} setPins={setPrimaryPins} />
      <button onClick={handleSubmit}>Submit Pins</button>
      <PinDisplay pins={cumulativePins} />
    </div>
  );
};

export default App;
