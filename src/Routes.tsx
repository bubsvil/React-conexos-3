import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Servicos from "./pages/Servicos";

export default function Routes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },

    {
      path: "/servicos",
      element: <Servicos/>
    },
    
  ]);

  return <RouterProvider router={routes} />;
}