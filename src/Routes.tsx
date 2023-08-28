import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Servicos from "./pages/Servicos";

export default function Routes() {
  const routes = createBrowserRouter([
    {
<<<<<<< HEAD
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
=======
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
>>>>>>> a970226f7f46316c01aac4fe6431140fdc665f18
