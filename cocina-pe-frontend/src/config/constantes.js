export const RUTAS = {
  home: "/",
  registro: "/registro",
  login: "/login",

  cocina: "/cocina",
  usuario: "/cocina/usuarios",
  platillo: "/cocina/platillos",
  platillo_id: "/cocina/platillos/:id",
  receta: "/cocina/recetas/:id",
  // receta_id: "/cocina/recetas/:id",
  favorito: "/cocina/favoritos",


};

export const HEADERS = {
  headers: {
    Authorization: JSON.parse(localStorage.getItem("authData"))
      ? JSON.parse(localStorage.getItem("authData")).token
      : null,
  },
};
