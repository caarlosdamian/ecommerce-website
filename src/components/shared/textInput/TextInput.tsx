import { HtmlHTMLAttributes } from 'react';
import { cn } from '../../../utils';
import { useIntl } from 'react-intl';

interface Props extends HtmlHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  isError: boolean;
}

export const TextInput = ({ label, isError, placeholder, ...props }: Props) => {
  const { formatMessage } = useIntl();
  return (
    <label htmlFor={label} className="flex flex-col gap-[9px]">
      <div className="flex justify-between items-center">
        <span className={cn('small-bold capitalize', isError && 'text-error')}>
          {formatMessage({ id: label })}
        </span>
        {isError && (
          <span className="small text-error">
            {formatMessage(
              { id: 'form_error' },
              { element: formatMessage({ id: label }) }
            )}
          </span>
        )}
      </div>
      <input
        type="text"
        name={label}
        {...props}
        placeholder={formatMessage({ id: placeholder })}
        className={cn(
          'outline-none rounded-lg p-[18px] ring-1 ring-[#CFCFCF] placeholder placeholder:text-opacity-40 focus:ring-primary',
          isError && 'ring-error'
        )}
      ></input>
    </label>
  );
};
