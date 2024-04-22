import { Button } from '../button/Button';
import { Product } from '../../../types';
import { useIntl } from 'react-intl';

interface Props {
  product: Product;
}

export const FeatureProduct = ({
  product: { new: isNew, name, categoryImage, description },
}: Props) => {
  const { formatMessage } = useIntl();
  return (
    <div className="flex flex-col max-w[327px] items-center gap-8 sm:gap-[52px] lg:flex-row lg:gap-[125px] lg:even:flex-row-reverse">
      <img
        src={categoryImage.desktop}
        alt={`image-${name}`}
        className="max-w-[327px] object-contain sm:max-w-[689px] lg:max-w-[540px] hidden lg:block"
      />
      <img
        src={categoryImage.tablet}
        alt={`image-${name}`}
        className="object-contain w-[689px] h-[352px] hidden sm:block lg:hidden"
      />
      <img
        src={categoryImage.mobile}
        alt={`image-${name}`}
        className="max-w-[327px] object-contain sm:max-w-[689px] lg:max-w-[540px] sm:hidden"
      />
      <div className="flex flex-col items-center gap-6 lg:items-start lg:gap-8">
        {isNew && (
          <span className="separateText text-primary">
            {formatMessage({ id: 'generic_new_product' })}
          </span>
        )}
        <h5 className="h4-bold text-customBlack sm:h2-bold uppercase">
          {name}
        </h5>
        <p className="body text-center text-opacity-50 text-customBlack sm:max-w-[572px] lg:text-start lg:mb-2">
          {description}
        </p>
        <Button variant="primary" id="btn_see_product_label" />
      </div>
    </div>
  );
};
