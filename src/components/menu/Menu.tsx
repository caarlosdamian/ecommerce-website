import { categories } from '../../constants';
import { CategoryCard } from '../shared/categoryCard/CategoryCard';

interface Props {
  handleClosed: () => void;
}

export const Menu = ({ handleClosed }: Props) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full">
      <div className="flex flex-col gap-[68px] bg-customWhite absolute top-[90px] left-0 max-h-[750px] w-full px-6 pt-20 pb-8 items-center z-20 sm:h-[340px] sm:flex-row sm:gap-[10px] sm:justify-center">
        {categories.map((item) => (
          <CategoryCard
            key={item.id}
            category={item.id}
            productImg={item.img}
          />
        ))}
      </div>
      <div
        className="bg-customBlack absolute top-[89px] left-0 bg-opacity-40 h-full w-full z-10"
        onClick={handleClosed}
      >
        overlay
      </div>
    </div>
  );
};
