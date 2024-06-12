import { useCallback, useState } from 'react';

export const useCounter = (initialState: number) => {
  const [counter, setCounter] = useState(initialState);
  const decrement = () => {
    if (counter === 1) {
      return;
    }
    setCounter((prev) => prev - 1);
  };

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const resetCounter = useCallback(() => {
    setCounter(initialState);
  }, [initialState]);
  return {
    decrement,
    increment,
    counter,
    resetCounter,
  };
};
