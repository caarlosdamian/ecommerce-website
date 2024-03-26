import { CategoryI } from '../../../types';
import { Button } from '../button/Button';

export const CategoryCard = ({ category, productImg }: CategoryI) => {
  // TODO AJUST IMAGE ADD TRANSLATIONS
  return (
    <div className="bg-customGray w-[327px] h-[165px] rounded-lg px-[115px] pt-[80px] pb-6 relative flex items-center justify-center flex-col gap-4 sm:w-[223px] md:w-[350px] md:h-[204px] md:px-[108px]">
      <img
        src={productImg}
        alt={`category-${category}`}
        className="max-w-[133px] object-contain absolute top-[-52px] left-0 right-0 mx-auto md:max-w-[165px] md:min-w-[146px]"
      />
      <span className="h6-bold md:medium-bold">{category}</span>
      <Button variant="link" id="btn_shop_label" />
    </div>
  );
};
