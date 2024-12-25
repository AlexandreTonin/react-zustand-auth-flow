import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet titleTemplate="%s | App" />
        <RouterProvider router={routes} />
      </HelmetProvider>
    </>
  );
}

export default App;
