import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Servicos from "./pages/Servicos";
import Detalhes_Servico from "./pages/detalhes_servico";
import Relatorios from "./pages/Relatorios";

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
    },
    {
      path: "/relatorios",
      element: <Relatorios/>
    }
  ]);

  return <RouterProvider router={routes} />;
}
