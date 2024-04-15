import { Hero } from '../../components/hero/Hero';
import { PrincipalProduct } from '../../components/principalProduct/PrincipalProduct';
import { CategoryCard } from '../../components/shared/categoryCard/CategoryCard';
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
      <PrincipalProduct />
    </section>
  );
};
