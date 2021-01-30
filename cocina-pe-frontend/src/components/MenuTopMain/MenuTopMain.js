import React, {useContext} from 'react';
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import './MenuTopMain.scss'
import { authContext } from "../../providers/AuthContext";
import { RUTAS } from "../../config/constantes";

export default function MenuTopMain(props) {
    const {auth} = props;

    return (
        <>
            <h1 className="menu-top__logo">COCINA PE</h1>
            {auth.data.tipo_usuario === "admin" ? (
                <Menu theme="dark" mode="horizontal"style={{color: "red"}, {backgroundColor: "#dd621b"}}>
                    <Menu.Item className="menu-top__menu-item" key={RUTAS.cocina}>
                        <Link to={RUTAS.cocina}>Home</Link>
                    </Menu.Item>
                    <Menu.Item className="menu-top__menu-item" key={RUTAS.platillo}>
                        <Link to={RUTAS.platillo}>Platillos</Link>
                    </Menu.Item>
                    <Menu.Item className="menu-top__menu-item" key={RUTAS.favorito}>
                        <Link to={RUTAS.favorito}>Favoritos</Link>
                    </Menu.Item>
                    <Menu.Item className="menu-top__menu-item" key={RUTAS.usuario}>
                        <Link to={RUTAS.usuario}>Usuarios</Link>
                    </Menu.Item>
                    
                </Menu>
            ) : (
                <Menu theme="dark" mode="horizontal" style={{color: "red"}, {backgroundColor: "#dd621b"}}>
                    <Menu.Item className="menu-top__menu-item" key={RUTAS.cocina}>
                        <Link to={RUTAS.cocina}>Home</Link>
                    </Menu.Item>
                    <Menu.Item className="menu-top__menu-item" key={RUTAS.receta}>
                        <Link to={RUTAS.receta}>Recetas</Link>
                    </Menu.Item>
                    <Menu.Item className="menu-top__menu-item" key={RUTAS.favorito}>
                        <Link to={RUTAS.favorito}>Favoritos</Link>
                    </Menu.Item>
                    
                </Menu>
            )} 

        </>
    );
};

