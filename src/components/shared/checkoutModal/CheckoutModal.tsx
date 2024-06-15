import { useMemo, useState } from 'react';
import { orderConfirmation } from '../../../assets';
import { useCartContext } from '../../../hooks/useCartContext';
import { Button } from '../button/Button';
import { Modal } from '../modal/Modal';
import { ProductDetails } from '../productDetails/ProductDetails';
import { ProductWithQuantity } from '../../../types';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

export const CheckoutModal = () => {
  const [showMore, setShowMore] = useState(false);
  const { formatMessage, formatNumber } = useIntl();
  const { items, totalOfAllProducts, removeAllItems } = useCartContext();
  const products = useMemo(() => items.slice(0, 1), [items]);

  const getProductDetails = (array: ProductWithQuantity[]) =>
    array.map(({ name, image: { mobile }, totalPrice, quantity }) => (
      <div className="flex items-center justify-between" key={name}>
        <ProductDetails name={name} img={mobile} totalPrice={totalPrice} />
        <p className="body opacity-50">x{quantity}</p>
      </div>
    ));

  return (
    <Modal.ModalBody className="w-[327px]  top-[114px] mx-auto left-0 right-0 rounded-lg px-7 py-8 flex flex-col gap-8 sm:px-12 sm:w-[540px] lg:top-[190px]">
      <img
        src={orderConfirmation}
        alt="order-confirmation-icon"
        className="w-16 h-16"
      />
      <div className="flex flex-col gap-4">
        <h2 className="h3-bold max-w-[200px] sm:max-w-[350px]">
          THANK YOU FOR YOUR ORDER
        </h2>
        <p className="body opacity-50">
          You will receive an email confirmation shortly.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row w-full">
        <div className="rounded-t-lg bg-customGray p-6  sm:rounded-l-lg sm:rounded-r-none  w-full">
          {getProductDetails(showMore ? items : products)}
          <div className="flex flex-col items-center justify-center gap-3 mt-3">
            <hr className="h-[1px] w-full" />
            {items.length > 1 && (
              <p
                className="small opacity-50 cursor-pointer"
                onClick={() => setShowMore((prev) => !prev)}
              >
                {formatMessage(
                  {
                    id: showMore ? 'checkout_view_less' : 'checkout_items',
                  },
                  {
                    count: items.length - 1,
                  }
                )}
              </p>
            )}
          </div>
        </div>
        <div className="rounded-b-lg bg-black py-4 px-6 sm:rounded-l-none sm:rounded-r-lg sm:py-11 w-full">
          <p className="body opacity-50 text-white uppercase">
            {formatMessage({ id: 'form_summary_grand_total' })}
          </p>
          <p className="medium-bold text-white uppercase">
            $ {formatNumber(totalOfAllProducts)}
          </p>
        </div>
      </div>
      <Link to="/" onClick={removeAllItems}>
        <Button id="checkout_btn" variant="primary" />
      </Link>
    </Modal.ModalBody>
  );
};
