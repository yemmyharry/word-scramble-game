import React from 'react';

interface ScrambledWordProps {
  word: string;
}

const ScrambledWord: React.FC<ScrambledWordProps> = ({ word }) => (
  <div>
    <h2>Scrambled Word: {word}</h2>
  </div>
);

export default ScrambledWord;