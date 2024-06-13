import { ReactNode } from 'react';

export interface BtnVariantsI {
  LINK: string;
  PRIMARY: string;
  SECONDARY: string;
  THIRD: string;
}

export interface LocaleI {
  ENGLISH: string;
}

export type ChildrenFunction = (
  counter: number,
  setCounter: React.Dispatch<React.SetStateAction<number>>
) => void;

export interface CategoryI {
  category: string;
  productImg: string;
  path: string;
  action?: () => void;
}

export interface ImageUrls {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface CategoryImageUrls {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface IncludedItem {
  quantity: number;
  item: string;
}

export interface messagesI {
  en: { [key: string]: string };
}

export interface PropsChildren {
  children: ReactNode;
}
export interface ModalContextInitialState {
  type: 'idle' | 'cart' | 'menu' | 'order';
}
export type CartActionType = 'add' | 'remove';

export interface ProductI {
  id: number;
  slug: string;
  name: string;
  image: Image;
  category: string;
  categoryImage: Image;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: Include[];
  gallery: Gallery;
  others: Other[];
}

export interface ProductWithQuantity extends ProductI {
  quantity: number;
}

export interface Other {
  slug: string;
  name: string;
  image: Image;
}

export interface Gallery {
  first: Image;
  second: Image;
  third: Image;
}

interface Include {
  quantity: number;
  item: string;
}

interface Image {
  mobile: string;
  tablet: string;
  desktop: string;
}

export type CartT = { items: ProductWithQuantity[] };
