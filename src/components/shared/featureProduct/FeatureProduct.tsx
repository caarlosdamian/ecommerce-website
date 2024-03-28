import React from "react";
import { Button } from "../button/Button";
import img from "../../../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg";
import imgtablet from "../../../assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";
import imgdesk from "../../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import { Product } from "../../../types";

interface Props {
  isNew?: boolean;
  item: Product;
}

export const FeatureProduct = ({ isNew }: Props) => {
  return (
    <div className="flex flex-col max-w[327px] items-center gap-8 sm:gap-[52px] lg:flex-row lg:gap-[125px] lg:even:flex-row-reverse">
      <img
        src={imgdesk}
        alt="img"
        className="max-w-[327px] object-contain sm:max-w-[689px] lg:max-w-[540px]"
      />
      <div className="flex flex-col items-center gap-6 lg:items-start lg:gap-8">
        {isNew && (
          <span className="separateText text-primary">NEW PRODUCT</span>
        )}
        <h5 className="h4-bold text-customBlack sm:h2-bold uppercase">
          XX59 Headphones
        </h5>
        <p className="body text-center text-opacity-50 text-customBlack sm:max-w-[572px] lg:text-start lg:mb-2">
          Enjoy your audio almost anywhere and customize it to your specific
          tastes with the XX59 headphones. The stylish yet durable versatile
          wireless headset is a brilliant companion at home or on the move.
        </p>
        <Button variant="primary" id="btn_see_product_label" />
      </div>
    </div>
  );
};
