import { useLocation } from 'react-router-dom';
import { CategoryCard, Feature } from '../../components';
import { categories } from '../../constants';
import data from '../../constants/data.json';
import { useEffect, useMemo } from 'react';
import { FeatureProduct } from '../../components/shared/featureProduct/FeatureProduct';
import { compararProductos } from '../../utils';

export const Category = () => {
  const location = useLocation();
  const category = useMemo(() => location.pathname.split('/')[2], [location]);
  const products = useMemo(
    () => data.filter((product) => product.category === category),
    [category]
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [category])
  

  return (
    <div className='pt-16 flex flex-col gap-[120px]'>
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
