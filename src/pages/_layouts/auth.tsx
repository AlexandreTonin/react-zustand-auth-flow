import { Lock } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          to="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Lock className="w-6 h-6 mr-2" />
          Zustand Auth Flow
        </Link>
        <Outlet />
      </div>
    </section>
  );
};

export default AuthLayout;
