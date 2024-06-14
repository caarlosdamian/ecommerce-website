/* eslint-disable @typescript-eslint/no-explicit-any */
import { HtmlHTMLAttributes } from 'react';
import { cn } from '../../../utils';
import { useIntl } from 'react-intl';
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister,
} from 'react-hook-form';

interface Props extends HtmlHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  isError:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  register: UseFormRegister<FieldValues>;
  inputName: string;
}

export const TextInput = ({
  label,
  isError,
  placeholder,
  register,
  inputName,
  ...props
}: Props) => {
  const { formatMessage } = useIntl();
  // TODO:  ADD STATES
  return (
    <label htmlFor={label} className="flex flex-col gap-[9px]">
      <div className="flex justify-between items-center">
        <span className={cn('small-bold capitalize', isError && 'text-error')}>
          {formatMessage({ id: label })}
        </span>
        {isError && (
          <span className="small text-error">
            {isError as unknown as string}
          </span>
        )}
      </div>
      <input
        type="text"
        {...register(inputName)}
        {...props}
        placeholder={formatMessage({ id: placeholder })}
        className={cn(
          'outline-none rounded-lg p-[18px] ring-1 ring-[#CFCFCF] placeholder placeholder:text-opacity-40 focus:ring-primary caret-primary',
          isError && 'ring-error'
        )}
      ></input>
    </label>
  );
};
