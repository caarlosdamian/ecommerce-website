import { Link } from 'react-router-dom';
import { Button } from '../shared/button/Button';

export const Hero = () => {
  // TODO: Add translations
  return (
    <section className="w-screen bg-[rgb(25,25,25)] h-full relative">
      <div className="container mx-auto pt-[108px] px-6 pb-[112px] sm:px-[195px] lg:px-0 lg:max-w-[1110px] ">
        <div className="flex items-center flex-col gap-4 relative z-10 sm:gap-6 lg:items-start max-w-[398px]">
          <span className="separateText text-customWhite opacity-45">
            NEW PRODUCT
          </span>
          <h1 className="h1-bold text-customWhite text-center lg:text-start">
            XX99 Mark II HeadphoneS
          </h1>
          <p className="text-customWhite h6-normal text-center opacity-75 mb-3 sm:mb-8 lg:text-start">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link to="/product/xx99-mark-two-headphones">
            <Button variant="primary" id="btn_see_product_label" />
          </Link>
        </div>
        <div className="w-full h-[116%] bg-hero-mobile bg-no-repeat bg-contain bg-center top-[-6rem] left-0 absolute sm:bg-hero-tablet lg:bg-hero-desktop z-2"></div>
      </div>
    </section>
  );
};
