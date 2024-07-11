import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import './App.css'
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Inicio from './pages/Inicio.tsx'
import './pages/Inicio.tsx'
import { Sobre_Nosotros } from "./pages/Sobre_Nosotros.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio/>,
  },

  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path: "/Register",
    element: <Register/>,
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
