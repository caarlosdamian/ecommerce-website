import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../../components';

export const Root = () => {
  return (
    <section className="">
      <Header />
      {/* TODO: THIS CONTAINER WILL BE INCHARGE OF CONTAININT ELEMENTS */}
      <section className="">
        <main className="container mx-auto">
          <Outlet />
        </main>
      </section>
      <Footer />
    </section>
  );
};
