import MainLayout from "../layouts/MainLayout";
import BasicLayout from "../layouts/BasicLayout";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Usuarios from "../pages/Usuarios";
import { Error404 } from "../pages/Error404";
import { RUTAS } from "../config/constantes";

const routes = [
  {
    path: RUTAS.cocina,
    component: MainLayout,
    exact: false,
    routes: [
      {
        path: RUTAS.cocina,
        component: Home,
        exact: true,
      },
      {
        path: RUTAS.usuario,
        component: Usuarios,
        exact: true,
      },
      {
        path: RUTAS.platillo,
        component: Home,
        exact: true,
      },
      {
        path: RUTAS.receta,
        component: Home,
        exact: true,
      },
      {
        path: RUTAS.favorito,
        component: Home,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
  {
    path: RUTAS.home,
    component: BasicLayout,
    exact: false,
    routes: [
      {
        path: RUTAS.home,
        component: Home,
        exact: true,
      },
      {
        path: RUTAS.login,
        component: Login,
        exact: true,
      },
      {
        path: RUTAS.registro,
        component: Login,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
];

export default routes;
