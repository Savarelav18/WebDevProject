import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Inicio from './pages/Inicio.tsx'
import './pages/Inicio.tsx'
import { Sobre_Nosotros } from "./pages/Sobre_Nosotros.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio/>,
  },
  {
    path: "/SobreNosotros",
    element: <Sobre_Nosotros/>,
  },

]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
