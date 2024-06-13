import { useIntl } from 'react-intl';
import { Modal } from '../modal/Modal';
import { useCartContext } from '../../../hooks/useCartContext';
import { QuantityButton } from '../quantityButton/QuantityButton';
import { ProductI, ProductWithQuantity } from '../../../types';
import { replaceCategory } from '../../../utils';
import { Button } from '../button/Button';
import { Link } from 'react-router-dom';

export const Cart = () => {
  const { formatMessage, formatNumber } = useIntl();
  const {
    items,
    addItemToCart,
    removeItemFromCart,
    totalOfAllProducts,
    removeAllItems,
  } = useCartContext();
  const handleClick = (type: string, product: ProductI) => {
    if (type === 'decrement') {
      removeItemFromCart(product);
    } else {
      addItemToCart(product, 1);
    }
  };
  const totalItems = items.reduce(
    (acc, element) => (acc += element.quantity),
    0
  );
  return (
    <Modal.ModalBody className="w-[377px] h-[488px] top-[114px] mx-auto left-0 right-0 rounded-lg px-7 py-8 flex flex-col gap-8 sm:right-10 sm:mx-0 sm:left-auto lg:right-[165px]">
      {items.length !== 0 ? (
        <>
          <div className="flex justify-between items-center">
            <p className="uppercase medium-bold">
              {formatMessage({ id: 'generic_cart' }, { amount: totalItems })}
            </p>
            <p
              className="body underline opacity-50 cursor-pointer hover:text-primary"
              onClick={removeAllItems}
            >
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
                      $ {formatNumber(product.totalPrice)}
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
              <p className="body opacity-50 uppercase">
                {formatMessage({ id: 'generic_total' })}
              </p>
              <p className="medium-bold">
                $ {formatNumber(totalOfAllProducts)}
              </p>
            </div>
            <Link to="/checkout">
              <Button
                style={{ width: '100%' }}
                variant="primary"
                id="generic_checkout"
              />
            </Link>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-between h-full">
          <h2 className="h3-bold text-center">
            {formatMessage({ id: 'generic_empty_cart' })}
          </h2>
        </div>
      )}
    </Modal.ModalBody>
  );
};
