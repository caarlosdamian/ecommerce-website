import { cn } from '../../../utils';
import { PropsChildren } from '../../../types';
import { useModalContext } from '../../../hooks/useModalContext';
import { Menu } from '../../menu/Menu';
import { createPortal } from 'react-dom';
import { Cart } from '../cart/Cart';
import { CheckoutModal } from '../checkoutModal/CheckoutModal';

const ModalContent = () => {
  const { handleClosedModal, modalState } = useModalContext();
  if (modalState.type === 'idle') return null;
  if (modalState.type === 'order') return <CheckoutModal />;
  if (modalState.type === 'cart') return <Cart />;
  if (modalState.type === 'menu')
    return <Menu handleClosed={handleClosedModal} />;
};

export const Modal = () => {
  return <ModalContent />;
};

interface Props extends PropsChildren {
  className?: string;
}

const ModalBody = ({ children, className }: Props) => {
  const { handleClosedModal } = useModalContext();
  return createPortal(
    <>
      <div className={cn('bg-customWhite absolute z-20', className)}>
        {children}
      </div>
      <div
        className="bg-customBlack bg-opacity-40 w-full h-[120%] fixed top-0 left-0 z-10"
        onClick={handleClosedModal}
      ></div>
    </>,
    document.body
  );
};

Modal.ModalBody = ModalBody;
