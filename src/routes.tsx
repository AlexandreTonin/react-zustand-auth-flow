import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/_layouts/app";
import NotFound from "./pages/NotFound";
import Home from "./pages/app/home";
import Profile from "./pages/app/profile";
import AuthLayout from "./pages/_layouts/auth";
import Login from "./pages/auth/login";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
