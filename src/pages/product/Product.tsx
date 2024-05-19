import { useLocation } from 'react-router-dom';
import { ProductI } from '../../types';
import { Mosaic } from '../../components/shared/mosaic/Mosaic';
import { categories } from '../../constants';
import { CategoryCard } from '../../components';

export const Product = () => {
  const { state } = useLocation();
  const {
    product: { gallery },
  } = state as { product: ProductI };
  // remove py-8
  return (
    <div className="container max-w-[1110px] mx-auto py-8 px-6 flex flex-col gap-[120px]">
      <Mosaic images={gallery} />
      <div className="px-6 pt-[100px] pb-[120px] flex flex-col items-center gap-[68px] sm:flex-row sm:gap-3 sm:justify-center sm:px-10 sm:pb-24 lg:pt-[200px] lg:gap-8 lg:pb-[168px]">
        {categories.map(({ id, img, path }) => (
          <CategoryCard category={id} path={path} productImg={img} key={id} />
        ))}
      </div>
    </div>
  );
};
