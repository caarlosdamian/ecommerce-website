import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { categoriesNames } from '../constants';
import { ProductI } from '../types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function compararProductos(a: ProductI, b: ProductI) {
  if (a.new && !b.new) {
    return -1;
  }
  if (!a.new && b.new) {
    return 1;
  }
  return 0;
}

export const replaceCategory = (name: string): string => {
  let result = '';
  categoriesNames.forEach((category) => {
    if (name.toUpperCase().includes(category.toUpperCase())) {
      result = name.toUpperCase().replace(category.toUpperCase(), '');
    }
  });
  return result;
};
