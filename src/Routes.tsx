import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Servicos from "./pages/Servicos";

export default function Routes() {
  const routes = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/servico",
      element: <Servicos />
    }
  ]);

  return <RouterProvider router={routes} />;
}
