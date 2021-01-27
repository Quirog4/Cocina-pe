export const RUTAS = {
  home: "/",
  registro: "/registro",
  login: "/login",

  cocina: "/cocina",
  usuario: "/cocina/usuarios",
  platillo: "/cocina/platillos",
  receta: "/cocina/recetas",
  favorito: "/cocina/favoritos",


};

export const HEADERS = {
  headers: {
    Authorization: JSON.parse(localStorage.getItem("authData"))
      ? JSON.parse(localStorage.getItem("authData")).token
      : null,
  },
};
