import { Button } from '../button/Button';
import { ProductI } from '../../../types';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

interface Props {
  product: ProductI;
}

export const FeatureProduct = ({ product }: Props) => {
  const { formatMessage } = useIntl();
  return (
    <div className="flex flex-col max-w[327px] items-center gap-8 sm:gap-[52px] lg:flex-row lg:gap-[125px] lg:even:flex-row-reverse">
      <img
        src={product.categoryImage.desktop}
        alt={`image-${product.name}`}
        className="max-w-[327px] object-contain sm:max-w-[689px] lg:max-w-[540px] hidden lg:block"
      />
      <img
        src={product.categoryImage.tablet}
        alt={`image-${product.name}`}
        className="object-contain w-[689px] h-[352px] hidden sm:block lg:hidden"
      />
      <img
        src={product.categoryImage.mobile}
        alt={`image-${product.name}`}
        className="max-w-[327px] object-contain sm:max-w-[689px] lg:max-w-[540px] sm:hidden"
      />
      <div className="flex flex-col items-center gap-6 lg:items-start lg:gap-8">
        {product.new && (
          <span className="separateText text-primary">
            {formatMessage({ id: 'generic_new_product' })}
          </span>
        )}
        <h5 className="h4-bold text-customBlack sm:h2-bold uppercase text-center md:text-start">
          {product.name}
        </h5>
        <p className="body text-center text-opacity-50 text-customBlack sm:max-w-[572px] lg:text-start lg:mb-2">
          {product.description}
        </p>

        <Link to={`/product/${product.slug}`} state={{ product }}>
          <Button variant="primary" id="btn_see_product_label" />
        </Link>
      </div>
    </div>
  );
};
