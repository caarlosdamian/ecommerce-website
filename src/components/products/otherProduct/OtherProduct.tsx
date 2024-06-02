import { Link } from 'react-router-dom';
import { Other } from '../../../types';
import { Button } from '../../shared/button/Button';
import { ResponsiveImage } from '../../shared/responsiveImage/ResponsiveImage';

interface Props {
  product: Other;
}

export const OtherProduct = ({ product: { image, name, slug } }: Props) => {
  return (
    <div className="flex flex-col gap-10 items-center">
      <ResponsiveImage
        desktop={image.desktop}
        mobile={image.mobile}
        tablet={image.tablet}
        className="object-contain rounded-lg"
      />
      <div className="flex flex-col gap-8 items-center">
        <p className="h5-bold">{name}</p>
        <Link to={`/product/${slug}`}>
          <Button variant="primary" id="btn_see_product_label" />
        </Link>
      </div>
    </div>
  );
};
