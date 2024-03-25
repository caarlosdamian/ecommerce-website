import { useState } from 'react';
import { ChildrenFunction } from '../../../types';

interface Props {
  children: ChildrenFunction;
}

export const QuantityButton = ({ children }: Props) => {
  const [counter, setCounter] = useState(1);
  const decrement = () => {
    if (counter === 1) {
      return;
    }
    setCounter((prev) => prev - 1);
  };

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  children(counter);

  return (
    <div className="bg-customGray flex items-center justify-center gap-5 w-[120px] h-12 p-[15px]">
      <span
        className="subtitle-bold-1px text-opacity-25 cursor-pointer hover:text-primary"
        onClick={decrement}
      >
        -
      </span>
      <span className="subtitle-bold-1px text-customBlack">{counter}</span>
      <span
        className="subtitle-bold-1px text-opacity-25 cursor-pointer hover:text-primary"
        onClick={increment}
      >
        +
      </span>
    </div>
  );
};
