import { HTMLAttributes } from 'react';
import { cn } from '../../../utils';
import { BtnVariantsI } from '../../../types';
import { BtnVariants } from '../../../constants';
import arrow from '../../../assets/shared/desktop/icon-arrow-right.svg';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'link';
  id: string;
}

export const Button = ({ variant, id, ...props }: Props) => {
  const key = variant.toUpperCase() as keyof BtnVariantsI;
  return (
    <button
      {...props}
      className={cn(
        `subtitle-bold-1px p-[15px] text-customWhite min-w-[160px] uppercase `,
        BtnVariants[key]
      )}
    >
      {variant === 'link' ? (
        <div className="flex gap-3 items-center">
          <span className="text-customBlack text-opacity-45 hover:text-primary hover:text-opacity-100">
            {id}
          </span>
          <img src={arrow} alt="arrow-right" />
        </div>
      ) : (
        id
      )}
    </button>
  );
};
