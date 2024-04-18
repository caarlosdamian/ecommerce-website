import {
  PrincipalProduct,
  SecondaryProduct,
  ThirdProduct,
  CategoryCard,
  Hero,
} from '../../components';
import { categories } from '../../constants';

export const Home = () => {
  return (
    <section className="bg-customWhite" id="home">
      <Hero />
      <div className="px-6 pt-[100px] pb-[120px] flex flex-col items-center gap-[68px] sm:flex-row sm:gap-3 sm:justify-center sm:px-10 sm:pb-24 lg:pt-[200px] lg:gap-8 lg:pb-[168px]">
        {categories.map(({ id, img, path }) => (
          <CategoryCard category={id} path={path} productImg={img} key={id} />
        ))}
      </div>
      <div className="flex w-full flex-col items-center gap-6 sm:gap-8">
        <PrincipalProduct />
        <SecondaryProduct />
        <ThirdProduct />
      </div>
    </section>
  );
};
