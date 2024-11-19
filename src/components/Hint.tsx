import React from 'react';

interface HintProps {
  hint: string;
}

const Hint: React.FC<HintProps> = ({ hint }) => (
  <div>
    <p>Hint: {hint}</p>
  </div>
);

export default Hint;