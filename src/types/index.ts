export interface BtnVariantsI {
  LINK: string;
  PRIMARY: string;
  SECONDARY: string;
}

export interface LocaleI {
  ENGLISH: string;
}

export type ChildrenFunction = (counter: number) => void;

export interface CategoryI {
  category: string;
  productImg: string;
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

export interface Product {
  id: number;
  slug: string;
  name: string;
  image: ImageUrls;
  category: string;
  categoryImage: CategoryImageUrls;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: IncludedItem[];
}

export interface messagesI {
  en: { [key: string]: string };
}