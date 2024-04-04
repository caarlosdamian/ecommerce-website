import { categories } from '../../constants';
import { CategoryCard } from '../shared/categoryCard/CategoryCard';
import { Modal } from '../shared/modal/Modal';

interface Props {
  handleClosed: () => void;
}

export const Menu = ({ handleClosed }: Props) => {
  return (
    <Modal.ModalBody className="flex flex-col gap-[68px] items-center sm:flex-row sm:gap-[10px] sm:justify-center px-6 pt-20 pb-8 top-[90px] left-0 z-20 max-h-[750px]  w-full sm:h-[340px] ">
      {categories.map((item) => (
        <CategoryCard
          key={item.id}
          category={item.id}
          productImg={item.img}
          path={item.path}
          action={handleClosed}
        />
      ))}
    </Modal.ModalBody>
  );
};
