import { HTMLAttributes } from 'react';
import { cn } from '../../../utils';
import { useIntl } from 'react-intl';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface Props extends HTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  label: string;
  register: UseFormRegister<FieldValues>;
  name: string;
  value: string;
}

export const Radio = ({ isError, label, register, name, ...props }: Props) => {
  const { formatMessage } = useIntl();
  // TODO:  ADD STATES
  return (
    <div
      className={cn(
        'outline-none rounded-lg   min-w-[308px] p-[18px] ring-1 ring-[#CFCFCF] placeholder placeholder:text-opacity-40 hover:ring-primary',
        isError && 'ring-error'
      )}
    >
      <label htmlFor={name} className="flex items-center gap-4">
        <input type="radio" {...props} {...register(name)} />
        {formatMessage({ id: label })}
      </label>
    </div>
  );
};
