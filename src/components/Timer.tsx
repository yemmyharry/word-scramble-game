import React from 'react';

interface TimerProps {
  time: number;
}

const Timer: React.FC<TimerProps> = ({ time }) => (
  <div>
    <p>Time Remaining: {time}s</p>
  </div>
);

export default Timer;