import { useLocation } from 'react-router-dom';
import { ProductI } from '../../types';
import { categories } from '../../constants';
import { CategoryCard, OtherProduct, Mosaic } from '../../components';

export const Product = () => {
  const { state } = useLocation();
  const { product } = state as { product: ProductI };
  // remove py-8
  return (
    <div className="container max-w-[1110px] mx-auto py-8 px-6 flex flex-col gap-[120px]">
      <Mosaic images={product.gallery} />
      {/* Other products */}
      <div className="grid grid-cols-1 gap-14 sm:grid-cols-3 sm:gap-3 lg:gap-8">
        {product.others &&
          product.others.map((product) => (
            <OtherProduct product={product} key={product.name} />
          ))}
      </div>
      <div className="px-6 pb-[120px] flex flex-col items-center gap-[68px] sm:flex-row sm:gap-3 sm:justify-center sm:px-10 sm:pb-24 lg:pt-12 lg:gap-8 lg:pb-[168px]">
        {categories.map(({ id, img, path }) => (
          <CategoryCard category={id} path={path} productImg={img} key={id} />
        ))}
      </div>
    </div>
  );
};
