import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <span>App Layout</span>
      <Outlet />
    </div>
  );
};

export default AppLayout;
