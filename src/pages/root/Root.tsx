import { Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <div className="bg-red-500">
      <Outlet />
    </div>
  );
};
