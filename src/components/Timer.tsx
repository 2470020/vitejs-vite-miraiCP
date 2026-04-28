import React, { useState, useEffect } from 'react';

export const Timer = ({ isOpen }: { isOpen: boolean }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval: any = null;
    if (isOpen) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
      setSeconds(0);
    }
    return () => clearInterval(interval);
  }, [isOpen]);

  const formatTime = (s: number) => {
    const min = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  };

  return (
    <div style={{ fontSize: '3rem', margin: '10px', fontFamily: 'monospace', color: '#333' }}>
      {formatTime(seconds)}
    </div>
  );
};