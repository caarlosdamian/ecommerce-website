import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../../components';
import { Menu } from '../../components/menu/Menu';
import { useState } from 'react';

export const Root = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClosed = () => {
    setMenuOpen(() => false);
  };
  const handleOpen = () => {
    setMenuOpen(() => true);
  };

  return (
    <section className="">
      <Header handleOpen={handleOpen} />
      {/* TODO: THIS CONTAINER WILL BE INCHARGE OF CONTAININT ELEMENTS */}
      <section className="">
        <main className="container mx-auto">
          {menuOpen && <Menu handleClosed={handleClosed} />}
          <Outlet />
        </main>
      </section>
      <Footer />
    </section>
  );
};
