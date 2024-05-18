import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Root, Home, Category, Product } from '../pages';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path='/category/:categoryId' element={<Category />} />
      <Route path='/product/:id' element={<Product />} />
    </Route>
  )
);
