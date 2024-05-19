import { useLocation } from 'react-router-dom';
import { ProductI } from '../../types';
import { Mosaic } from '../../components/shared/mosaic/Mosaic';

export const Product = () => {
  const { state } = useLocation();
  const {
    product: { gallery },
  } = state as { product: ProductI };
  console.log('gallery', gallery);
  return (
    <div className="container max-w-[1110px] mx-auto py-8 px-6 flex flex-col gap-[120px]">
      <Mosaic images={gallery} />
    </div>
  );
};
