import { Button } from '../../shared/button/Button';

export const SecondaryProduct = () => {
    // TODO: ADD translations get props
  return (
    <div className="min-w-[327px] h-80 rounded-lg mb-9 mx-auto sm:min-w-[689px] lg:min-w-[1110px]">
      <div className="relative w-full h-full flex flex-col">
        <div className="z-20 flex flex-col px-6 justify-center items-start h-full gap-8 sm:px-16 sm:py-[101px]">
          <span className="h4-bold">ZX7 SPEAKER</span>
          <Button variant="secondary" id="btn_see_product_label" />
        </div>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-home-products-two-mobile bg-no-repeat bg-cover rounded-lg sm:bg-home-products-two-tablet lg:bg-home-products-two-desktop" />
      </div>
    </div>
  );
};
