import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Product } from '../types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function compararProductos(a: Product, b: Product) {
  if (a.new && !b.new) {
    return -1;
  }
  if (!a.new && b.new) {
    return 1;
  }
  return 0;
}
