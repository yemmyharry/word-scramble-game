import React from 'react';

interface ScoreProps {
  score: number;
}

const Score: React.FC<ScoreProps> = ({ score }) => (
  <div>
    <p>Score: {score}</p>
  </div>
);

export default Score;