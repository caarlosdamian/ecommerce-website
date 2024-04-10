import { cn } from '../../../utils';
import { PropsChildren } from '../../../types';
import { useModalContext } from '../../../hooks/useModalContext';
import { Menu } from '../../menu/Menu';

const ModalContent = () => {
  const { handleClosedModal, modalState } = useModalContext();
  if (modalState.type === 'idle') return null;
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
  return (
    <>
      <div className={cn('bg-customWhite absolute z-50', className)}>
        {children}
      </div>
      <div
        className="bg-customBlack bg-opacity-40 w-full h-[120%] fixed top-0 left-0 z-30"
        onClick={handleClosedModal}
      ></div>
    </>
  );
};

Modal.ModalBody = ModalBody;
