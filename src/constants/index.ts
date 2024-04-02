import { earphones, headphones, speakers } from '../assets';

export const BtnVariants = {
  LINK: '',
  PRIMARY: 'bg-primary hover:bg-third p-[15px] min-w-[160px]',
  SECONDARY:
    'bg-customWhite border ring-customBlack text-customBlack hover:text-customWhite hover:bg-customBlack p-[15px] min-w-[160px]',
};

export const headerLinks = [
  {
    id: 'header_home_label',
    path: '/',
  },
  {
    id: 'header_headphone_label',
    path: '/category/headphone',
  },
  {
    id: 'header_speakers_label',
    path: '/category/speakers',
  },
  {
    id: 'header_earphones_label',
    path: '/category/earphones',
  },
];

export const categories = [
  {
    id: 'header_headphone_label',
    img: headphones,
    imgAlt: 'category_headphone_img_alt',
  },
  {
    id: 'header_speakers_label',
    img: speakers,
    imgAlt: 'category_speakers_img_alt',
  },
  {
    id: 'header_earphones_label',
    img: earphones,
    imgAlt: 'category_earphones_img_alt',
  },
];
