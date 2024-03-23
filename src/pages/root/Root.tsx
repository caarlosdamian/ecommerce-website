import { Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <section className="bg-red-500">
      <Outlet />
    </section>
  );
};
