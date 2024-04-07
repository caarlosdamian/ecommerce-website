import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../../components';
import { Modal } from '../../components/shared/modal/Modal';

export const Root = () => {
  return (
    <section className="">
      <Header />
      <Modal />
      {/* TODO: THIS CONTAINER WILL BE INCHARGE OF CONTAININT ELEMENTS */}
      <section className="">
        <main className="container mx-auto h-screen">
          <Outlet />
        </main>
      </section>
      <Footer />
    </section>
  );
};
