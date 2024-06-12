interface Props {
  increment: () => void;
  decrement: () => void;
  counter: number;
}

export const QuantityButton = ({ counter, decrement, increment }: Props) => {
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
