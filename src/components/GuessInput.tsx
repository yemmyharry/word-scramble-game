import React from 'react';

interface GuessInputProps {
  guess: string;
  onGuessChange: (guess: string) => void;
  onGuessSubmit: () => void;
}

const GuessInput: React.FC<GuessInputProps> = ({ guess, onGuessChange, onGuessSubmit }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onGuessChange(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGuessSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={guess}
        onChange={handleInputChange}
        placeholder="Enter your guess"
      />
      <button type="submit">Submit Guess</button>
    </form>
  );
};

export default GuessInput;