import { useLocation } from 'react-router-dom';
import { ProductI } from '../../types';

export const Product = () => {
  const { state } = useLocation();
  const { gallery } = state as ProductI;
  return <div>Product</div>;
};
