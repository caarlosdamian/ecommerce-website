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
    <div
      className="bg-customBlack bg-opacity-40 w-full h-full fixed top-0 left-0"
      onClick={handleClosedModal}
    >
      <div className={cn('bg-customWhite absolute', className)}>{children}</div>
    </div>
  );
};

Modal.ModalBody = ModalBody;