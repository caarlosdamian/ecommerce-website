import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { categories } from '../../constants';
import {
  CategoryCard,
  OtherProduct,
  Mosaic,
  Feature,
  ResponsiveImage,
  Button,
  QuantityButton,
} from '../../components';
// this will be remove when api is up
import data from '../../constants/data.json';
import { useScrollTop } from '../../hooks/useScrollTop';
import { useIntl } from 'react-intl';
import { useCartContext } from '../../hooks/useCartContext';
import { useCounter } from '../../hooks/useCounter';
import { useEffect } from 'react';

export const Product = () => {
  const { slug } = useParams<{ slug: string }>();
  const pathname = useLocation();
  const [product] = data.filter((productItem) => productItem.slug === slug);
  const { formatNumber } = useIntl();
  const navegate = useNavigate();
  const { addItemToCart } = useCartContext();
  const { counter, decrement, increment, resetCounter } = useCounter(1);
  useScrollTop(pathname);

  useEffect(() => {
    resetCounter();
  }, [resetCounter, slug]);

  return (
    <div className="container max-w-[1110px] mx-auto py-8 px-6 flex flex-col gap-[120px]">
      <div className="flex flex-col ">
        <button
          onClick={() => navegate(-1)}
          className="text-left body opacity-50 mb-6 hover:text-primary"
        >
          Go Back
        </button>
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between mb-[88px]">
          <ResponsiveImage
            desktop={product.image.desktop}
            mobile={product.image.mobile}
            tablet={product.image.tablet}
            className="sm:max-w-[218px] lg:max-w-[540px]"
          />
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <span className="separateText text-primary ">NEW PRODUCT</span>
              <h2 className="text-[28px] font-bold  tracking-[1px] uppercase">
                {product.name}
              </h2>
              <p className="body opacity-50">{product.description}</p>
            </div>
            <div className="flex flex-col gap-8">
              <p className="medium-bold">$ {formatNumber(product.price)}</p>
              <div className="flex gap-4 items-center h-[48px]">
                <QuantityButton
                  counter={counter}
                  increment={increment}
                  decrement={decrement}
                />
                <Button
                  style={{ padding: '10px' }}
                  variant="primary"
                  id="generic_add_to_cart"
                  onClick={() => {
                    addItemToCart(product, counter);
                    resetCounter();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-20 lg:flex-row lg:gap-32">
          <div className="flex flex-col gap-6 flex-1">
            <h3 className="h3-bold uppercase">FEATURES</h3>
            <p className="body opacity-50">{product.features}</p>
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
