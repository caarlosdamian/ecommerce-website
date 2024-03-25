import { HtmlHTMLAttributes } from 'react';
import { cn } from '../../../utils';

interface Props extends HtmlHTMLAttributes<HTMLInputElement> {
  label: string;
  isError: boolean;
}

export const TextInput = ({ label, isError, ...props }: Props) => {
  // TODO: Add translations keys to:
  //  - Placeholder
  //  - Labels
  //  - Error Messages
  return (
    <label htmlFor={label} className="flex flex-col gap-[9px]">
      <div className="flex justify-between items-center">
        <span className={cn('small-bold', isError && 'text-error')}>
          Username:
        </span>
        {isError && <span className="small text-error">Wrong Name</span>}
      </div>
      <input
        type="text"
        name={label}
        {...props}
        placeholder="Testing"
        className={cn(
          'outline-none rounded-lg p-[18px] ring-1 ring-[#CFCFCF] placeholder placeholder:text-opacity-40 focus:ring-primary',
          isError && 'ring-error'
        )}
      ></input>
    </label>
  );
};
