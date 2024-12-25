import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <span>Auth Layout</span>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
