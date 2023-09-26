import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Servicos from "./pages/Servicos";
import Detalhes_Servico from "./pages/detalhes_servico";
import Relatorios from "./pages/Relatorios";
import Formulario_soli from "./pages/Formulario";

export default function Routes() {
  const routes = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    }, 
    {
      path: "/formulario",
      element: <Formulario_soli/>
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
