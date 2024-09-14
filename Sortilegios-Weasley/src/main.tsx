import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Inicio from './pages/Inicio.tsx'
import './pages/Inicio.tsx'
import { Sobre_Nosotros } from "./pages/Sobre_Nosotros.tsx";
import { Pago } from "./pages/Pago.tsx"
import { DetalleProducto } from "./pages/DetalleProducto.tsx";
import { ProductsProvider } from "./context/ProductsContext.tsx";
import { DetallePedido } from "./pages/DetallePedido.tsx";
import { DetalleCompra } from "./pages/DetalleCompra.tsx";
import { Tienda } from "./pages/Tienda.tsx";
import { CarritoComprasProvider } from "./context/carrito.tsx";
import { RegisterForm } from "./components/RegisterForm.tsx";
import { LoginForm } from "./components/LoginForm.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
  },
  {
    path: "/SobreNosotros",
    element: <Sobre_Nosotros />,
  },
  {
    path: "/DetalleProducto",
    children: [
      {
        path: ":productId",
        element: <DetalleProducto />,
      }
    ]
  },
  {
    path: "/DetallePedido",
    element: <DetallePedido />,
  },
  {
    path: "/Pago",
    element: <Pago />,
  },
  {
    path: "/DetalleCompra",
    element: <DetalleCompra />,
  },
  {
    path: "/Tienda",
    element: <Tienda />,
  },
  {
    path: "/Login",
    element: <LoginForm />,
  },
  {
    path: "/Register",
    element: <RegisterForm />,
  },

  {
    path: "/SobreNosotros",
    element: <Sobre_Nosotros />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProductsProvider>
      <CarritoComprasProvider>
        <RouterProvider router={router} />
      </CarritoComprasProvider>
    </ProductsProvider>
  </React.StrictMode>
);
