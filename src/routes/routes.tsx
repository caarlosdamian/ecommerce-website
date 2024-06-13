import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Root, Home, Category, Product, Checkout } from '../pages';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/category/:categoryId" element={<Category />} />
      <Route path="/product/:slug" element={<Product />} />
    </Route>
  )
);
