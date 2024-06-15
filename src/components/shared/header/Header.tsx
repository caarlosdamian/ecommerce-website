import { NavLink } from 'react-router-dom';
import { cart, hamburger, logo } from '../../../assets';
import { headerLinks } from '../../../constants';
import { useIntl } from 'react-intl';
import { useModalContext } from '../../../hooks/useModalContext';
import { ModalActionTypes } from '../../../context/modal/modalActions';
import { useCartContext } from '../../../hooks/useCartContext';

export const Header = () => {
  const { formatMessage } = useIntl();
  const { handleOpenModal } = useModalContext();
  const { items } = useCartContext();
  const allProductsCount = items.reduce((acc, element) => {
    return (acc += element.quantity);
  }, 0);

  return (
    <header className="bg-[rgb(25,25,25)] h-[89px] lg:h-[96px] sm:px-10 relative z-10 border-b border-customWhite border-opacity-[0.104] sm:border-b-0 sm:border-none">
      <section className="container mx-auto flex justify-between items-center h-full w-full px-6 gap-[42px] md:px-0 sm:border-customWhite sm:border-b sm:border-opacity-[0.104] max-w-[1110px]">
        <div className="lg:hidden">
          <img
            src={hamburger}
            alt="hamburger"
            onClick={() => handleOpenModal(ModalActionTypes.OPEN_MENU)}
          />
        </div>
        <div className="md:justify-start md:flex-1 lg:flex lg:items-center lg:gap-[198px]">
          <img
            src={logo}
            alt="logo"
            className="lg:w-[143px] lg:h-[25px] object-contain"
          />
          <ul className="hidden lg:flex items-center text-customWhite gap-[34px]">
            {headerLinks.map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                className="subtitle-bold-nav cursor-pointer hover:text-primary"
              >
                {formatMessage({ id: link.id })}
              </NavLink>
            ))}
          </ul>
        </div>
        <div
          className="sm:flex-2 relative cursor-pointer"
          onClick={() => handleOpenModal(ModalActionTypes.OPEN_CART)}
        >
          <img src={cart} alt="cart" />
          {items.length !== 0 && (
            <div className="absolute top-[-10px] right-[-12px] rounded-full h-5 w-5 bg-red-600 flex items-center justify-center">
              <span className="text-white small">{allProductsCount}</span>
            </div>
          )}
        </div>
      </section>
    </header>
  );
};
