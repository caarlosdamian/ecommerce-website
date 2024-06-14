import { useIntl } from 'react-intl';
import { replaceCategory } from '../../../utils';

interface Props {
  img: string;
  name: string;
  totalPrice: number;
}

export const ProductDetails = ({ img, name, totalPrice }: Props) => {
  const { formatNumber } = useIntl();
  return (
    <div className="flex gap-4">
      <img className="w-16 h-16 rounded-lg" src={img} alt="product image" />
      <div className="flex flex-col gap-1">
        <p className="subtitle-bold uppercase">{replaceCategory(name)}</p>
        {/* Debe ser el total del producto */}
        <p className="text-sm font-bold leading-[25px] opacity-50">
          $ {formatNumber(totalPrice)}
        </p>
      </div>
    </div>
  );
};
