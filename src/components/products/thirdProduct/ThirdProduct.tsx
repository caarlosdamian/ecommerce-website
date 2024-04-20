import { Button } from '../../shared/button/Button';

export const ThirdProduct = () => {
  return (
    <div className="min-w-[327px] min-h-[424px] mb-9 mx-auto sm:min-w-[689px] lg:min-w-[1110px]">
      <div className="w-full h-full flex flex-col gap-6 sm:flex-row">
        <div className="relative min-h-[200px] sm:h-[320px] flex-1">
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-home-products-third-mobile bg-no-repeat bg-cover rounded-lg sm:bg-home-products-third-tablet lg:bg-home-products-third-desktop" />
        </div>
        <div className="bg-customGray rounded-lg flex flex-col px-6 justify-center items-start min-h-[200px] gap-8 sm:h-[320px] flex-1 sm:items-center lg:items-start lg:px-24">
          <span className="h4-bold">ZX7 SPEAKER</span>
          <Button variant="secondary" id="btn_see_product_label" />
        </div>
      </div>
    </div>
  );
};
