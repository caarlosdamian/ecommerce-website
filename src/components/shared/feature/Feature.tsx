import { useIntl } from 'react-intl';
import { cn } from '../../../utils';

type Props = {
  header: string;
  desc: string;
  imgcls: string;
};

export const Feature = ({ desc, header, imgcls }: Props) => {
  const { formatMessage } = useIntl();
  const translated = formatMessage(
    { id: header },
    {
      color: `<strong class='text-primary'>${formatMessage({
        id: 'feature_header_color',
      })}</strong>`,
    }
  );

  return (
    <div className="container mx-auto px-6 pb-32 flex flex-col gap-10 sm:pb-24 sm:gap-16 sm:px-10 sm:items-center lg:flex-row-reverse lg:justify-center lg:gap-32 max-w-[1110px] lg:pb-40">
      <div className="relative">
        <div
          className={cn(
            'rounded-lg bg-contain bg-no-repeat min-w-[327px] min-h-[300px] sm:w-[689px] lg:w-[540px] lg:h-[588px]',
            imgcls
          )}
        />
      </div>
      <div className="flex flex-col gap-8 sm:items-center lg:min-w-[445px]">
        <h1
          className="h4-bold uppercase text-center sm:h2-bold lg:text-start"
          dangerouslySetInnerHTML={{ __html: translated }}
        />
        <p className="body text-opacity-50 text-customBlack text-center sm:max-w-[574px] lg:text-start lg:max-w-full">
          {formatMessage({ id: desc })}
        </p>
      </div>
    </div>
  );
};
