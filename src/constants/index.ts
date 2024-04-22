import { earphones, headphones, speakers } from '../assets';

export const BtnVariants = {
  LINK: '',
  PRIMARY: 'bg-primary hover:bg-third p-[15px] min-w-[160px]',
  SECONDARY:
    'bg-trasparent  ring-1 ring-customBlack text-customBlack hover:text-customWhite hover:bg-customBlack p-[15px] min-w-[160px]',
  THIRD:
    'text-customWhite bg-customBlack p-[15px] min-w-[160px] hover:bg-[#4C4C4C]',
};

export const headerLinks = [
  {
    id: 'header_home_label',
    path: '/',
  },
  {
    id: 'header_headphone_label',
    path: '/category/headphones',
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
    path: '/category/headphones',
  },
  {
    id: 'header_speakers_label',
    img: speakers,
    imgAlt: 'category_speakers_img_alt',
    path: '/category/speakers',
  },
  {
    id: 'header_earphones_label',
    img: earphones,
    imgAlt: 'category_earphones_img_alt',
    path: '/category/earphones',
  },
];
