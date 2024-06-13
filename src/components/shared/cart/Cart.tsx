import { useIntl } from 'react-intl';
import { Modal } from '../modal/Modal';
import { useCartContext } from '../../../hooks/useCartContext';
import { QuantityButton } from '../quantityButton/QuantityButton';
import { ProductI, ProductWithQuantity } from '../../../types';
import { replaceCategory } from '../../../utils';
import { Button } from '../button/Button';

export const Cart = () => {
  const { formatMessage, formatNumber } = useIntl();
  const { items, addItemToCart, removeItemFromCart } = useCartContext();
  const handleClick = (type: string, product: ProductI) => {
    if (type === 'decrement') {
      removeItemFromCart(product);
    } else {
      addItemToCart(product, 1);
    }
  };
  return (
    <Modal.ModalBody className="w-[377px] h-[488px] top-[114px] mx-auto left-0 right-0 rounded-lg px-7 py-8 flex flex-col gap-8">
      {items.length !== 0 ? (
        <>
          <div className="flex justify-between items-center">
            <p className="uppercase medium-bold">
              {formatMessage({ id: 'generic_cart' }, { amount: 3 })}
            </p>
            <p className="body underline opacity-50">
              {formatMessage({ id: 'generic_remove_all' })}
            </p>
          </div>
          <div className="flex flex-col gap-6 max-h-[250px] overflow-scroll">
            {items.map((product: ProductWithQuantity) => (
              <div
                className="flex items-center justify-between"
                key={product.id}
              >
                <div className="flex gap-4">
                  <img
                    className="w-16 h-16 rounded-lg"
                    src={product.image.mobile}
                    alt="product image"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="subtitle-bold uppercase">
                      {replaceCategory(product.name)}
                    </p>
                    {/* Debe ser el total del producto */}
                    <p className="text-sm font-bold leading-[25px] opacity-50">
                      $ {formatNumber(product.price)}
                    </p>
                  </div>
                </div>
                <QuantityButton
                  counter={product.quantity}
                  decrement={() => handleClick('decrement', product)}
                  increment={() => handleClick('increment', product)}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <p className="body opacity-50 uppercase">TOTAL</p>
              <p className="medium-bold">$ 5,396</p>
            </div>
            <Button
              style={{ width: '100%' }}
              variant="primary"
              id="generic_checkout"
            />
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-between h-full">
          <h2 className="h3-bold text-center">Cart empty</h2>
        </div>
      )}
    </Modal.ModalBody>
  );
};
