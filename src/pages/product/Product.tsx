import { useParams } from 'react-router-dom';
import { categories } from '../../constants';
import { CategoryCard, OtherProduct, Mosaic, Feature } from '../../components';
// this will be remove when api is up
import data from '../../constants/data.json';
import { useScrollTop } from '../../hooks/useScrollTop';

export const Product = () => {
  const { slug } = useParams<{ slug: string }>();
  const [product] = data.filter((productItem) => productItem.slug === slug);
  useScrollTop(slug);

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
      <Feature
        header="feature_header"
        desc="feature_desc"
        imgcls="bg-shared-head-mobile sm:bg-shared-head-tablet lg:bg-shared-head-desktop"
      />
    </div>
  );
};
