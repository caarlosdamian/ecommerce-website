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
      <div className="">
        <div className=""></div>
        {/* details */}
        <div className="flex flex-col gap-20 lg:flex-row lg:gap-32">
          <div className="flex flex-col gap-6 flex-1">
            <h3 className="h3-bold uppercase">FEATURES</h3>
            <p className="body opacity-50">
              Featuring a genuine leather head strap and premium earcups, these
              headphones deliver superior comfort for those who like to enjoy
              endless listening. It includes intuitive controls designed for any
              situation. Whether you’re taking a business call or just in your
              own personal space, the auto on/off and pause features ensure that
              you’ll never miss a beat. The advanced Active Noise Cancellation
              with built-in equalizer allow you to experience your audio world
              on your terms. It lets you enjoy your audio in peace, but quickly
              interact with your surroundings when you need to. Combined with
              Bluetooth 5. 0 compliant connectivity and 17 hour battery life,
              the XX99 Mark II headphones gives you superior sound, cutting-edge
              technology, and a modern design aesthetic.
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-6 sm:flex-row sm:justify-between sm:pr-[180px] lg:pr-0 lg:flex-col lg:justify-normal">
            <h3 className="h3-bold uppercase">in the box</h3>
            <div className="flex flex-col gap-2">
              {product.includes.map(({ item, quantity }) => (
                <div className="flex gap-6" key={item}>
                  <p className="body text-primary font-bold">{quantity}x</p>
                  <p className="body opacity-50">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
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
