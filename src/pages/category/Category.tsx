import { useParams } from 'react-router-dom';
import { CategoryCard, Feature } from '../../components';
import { categories } from '../../constants';
import data from '../../constants/data.json';
import { useMemo } from 'react';
import { FeatureProduct } from '../../components/shared/featureProduct/FeatureProduct';
import { compararProductos } from '../../utils';
import { useScrollTop } from '../../hooks/useScrollTop';

export const Category = () => {
  const { categoryId } = useParams();
  const products = useMemo(
    () => data.filter((product) => product.category === categoryId),
    [categoryId]
  );
  useScrollTop(categoryId);

  return (
    <div className="pt-16 flex flex-col gap-[120px]">
      <div className="container max-w-[1110px] mx-auto px-6 flex flex-col gap-[120px]">
        {products.sort(compararProductos).map((product) => (
          <FeatureProduct product={product} key={product.id} />
        ))}
      </div>
      <div className="px-6 pt-[100px] pb-[120px] flex flex-col items-center gap-[68px] sm:flex-row sm:gap-3 sm:justify-center sm:px-10 sm:pb-24 lg:pt-[200px] lg:gap-8 lg:pb-[168px]">
        {categories.map(({ id, img, path }) => (
          <CategoryCard category={id} path={path} productImg={img} key={id} />
        ))}
      </div>
      <Feature
        header="feature_header"
        desc="feature_desc"
        imgcls="bg-shared-head-mobile sm:bg-shared-head-tablet lg:bg-shared-head-desktop"
      />
    </div>
  );
};
