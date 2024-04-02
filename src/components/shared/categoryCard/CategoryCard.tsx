import { useIntl } from 'react-intl';
import { CategoryI } from '../../../types';
import { Button } from '../button/Button';

export const CategoryCard = ({ category, productImg }: CategoryI) => {
  const { formatMessage } = useIntl();
  return (
    <div className="bg-customGray w-[327px] h-[165px] rounded-lg px-[115px] pt-[80px] pb-6 relative flex items-center justify-center flex-col gap-4 sm:w-[223px] lg:w-[350px] lg:h-[204px] lg:px-[108px]">
      <img
        src={productImg}
        alt={`category-${formatMessage({ id: category })}`}
        className="max-w-[133px] object-contain absolute top-[-52px] left-0 right-0 mx-auto md:max-w-[165px] md:min-w-[146px]"
      />
      <span className="h6-bold md:medium-bold">
        {formatMessage({ id: category })}
      </span>
      <Button variant="link" id="btn_shop_label" />
    </div>
  );
};
