import { Link } from 'react-router-dom';
import {
  patternCircles,
  principalProductDesktop,
  principalProductMobile,
} from '../../../assets';
import { Button } from '../../shared/button/Button';

export const PrincipalProduct = () => {
  // Remove pb-11
  // TODO: ADD translations get props
  return (
    <div className="px-6 sm:px-10">
      <div className="bg-primary px-6 py-14 relative rounded-lg overflow-hidden sm:px-[170px] sm:py-16 lg:flex lg:pb-0 lg:gap-[140px] lg:pt-[133px] lg:min-h-[560px] lg:max-w-[1110px] lg:mx-auto">
        <img
          src={patternCircles}
          alt="patternCircles"
          className="absolute top-0 left-0 right-0 bottom-0 sm:top-[-150px]"
        />
        <div className="hidden lg:flex min-w-[40%]">
          <img
            src={principalProductDesktop}
            alt="principalProductMobile"
            className="object-contain absolute h-[493px] bottom-[-10px] left-[140px]"
          />
        </div>
        <div className="flex items-center flex-col gap-6 lg:items-start relative z-10">
          <img
            src={principalProductMobile}
            alt="principalProductMobile"
            className="object-contain h-[207px] z-10 lg:hidden"
          />
          <h1 className="h1-bold text-center text-customWhite break-before-all w-[250px] mt-2 sm:mt-8 lg:text-start">
            ZX9 SPEAKER
          </h1>
          <p className="h6-normal text-center text-customWhite text-opacity-75 sm:mb-4 lg:text-start">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link to={`/product/zx9-speaker/`}>
            <Button variant="third" id="btn_see_product_label" />
          </Link>
        </div>
      </div>
    </div>
  );
};
