// src/components/SubmissionForm.tsx
import React from 'react';

interface SubmissionFormProps {
  onSubmit: () => void;
}

const SubmissionForm: React.FC<SubmissionFormProps> = ({ onSubmit }) => {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
      <button type="submit">Submit Pins</button>
    </form>
  );
};

export default SubmissionForm;
