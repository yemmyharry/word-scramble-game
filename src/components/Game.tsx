import React, { useState, useEffect } from 'react';
import { WORDS } from '../data/words';
import ScrambledWord from './ScrambledWord';
import GuessInput from './GuessInput';
import Hint from './Hint';
import Score from './Score';
import Timer from './Timer';

const Game: React.FC = () => {
  // State management
  const [wordList, setWordList] = useState<string[]>(WORDS);
  const [currentWord, setCurrentWord] = useState<string>('');
  const [scrambledWord, setScrambledWord] = useState<string>('');
  const [guess, setGuess] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [hint, setHint] = useState<string>('');
  const [timer, setTimer] = useState<number>(60);
  const [gameOver, setGameOver] = useState<boolean>(false);

  // Select a random word on mount
  useEffect(() => {
    if (wordList.length > 0) {
      selectRandomWord();
    } else {
      setGameOver(true);
    }
  }, []);

  // Timer countdown
  useEffect(() => {
    if (timer > 0 && !gameOver) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      setGameOver(true);
    }
  }, [timer, gameOver]);

  // Select and scramble a word
  const selectRandomWord = () => {
    const index = Math.floor(Math.random() * wordList.length);
    const word = wordList[index];
    setCurrentWord(word);
    setScrambledWord(scrambleWord(word));
    setHint(`The word has ${word.length} letters.`);
  };

  // Scramble logic
  const scrambleWord = (word: string): string => {
    const letters = word.split('');
    for (let i = letters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    return letters.join('');
  };

  // Handle guess submission
  const handleGuessSubmit = () => {
    if (guess.trim() === '') {
      alert('Please enter a non-empty guess.');
      return;
    }

    if (guess.toLowerCase() === currentWord.toLowerCase()) {
      alert('Correct!');
      setScore((prev) => prev + 1);
      setGuess('');
      const updatedWordList = wordList.filter((word) => word !== currentWord);
      setWordList(updatedWordList);
      if (updatedWordList.length > 0) {
        selectRandomWord();
      } else {
        setGameOver(true);
      }
    } else {
      alert('Incorrect, try again.');
      setGuess('');
    }
  };

  if (gameOver) {
    return (
      <div>
        <h1>Game Over!</h1>
        <p>Your score: {score}</p>
      </div>
    );
  }

  return (
    <div>
      <Timer time={timer} />
      <Score score={score} />
      <ScrambledWord word={scrambledWord} />
      <Hint hint={hint} />
      <GuessInput
        guess={guess}
        onGuessChange={setGuess}
        onGuessSubmit={handleGuessSubmit}
      />
    </div>
  );
};

export default Game;