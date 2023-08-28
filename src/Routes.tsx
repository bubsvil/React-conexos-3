import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Servicos from "./pages/Servicos";
import Detalhes_Servico from "./pages/detalhes_servico";

export default function Routes() {
  const routes = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/servico",
      element: <Servicos />
    },
    {
      path: "/detalhe_servico",
      element: <Detalhes_Servico />
    }
  ]);

  return <RouterProvider router={routes} />;
}
