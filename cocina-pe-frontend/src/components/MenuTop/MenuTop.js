import React from 'react';
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import './MenuTop.scss'

import { RUTAS } from "../../config/constantes";


export default function MenuTop() {

    return (
        <>
            <h1 className="menu-top__logo">COCINA PE</h1>
            <Menu theme="dark" mode="horizontal" style={{color: "red"}, {backgroundColor: "#dd621b"}}>
                <Menu.Item className="menu-top__menu-item" key={RUTAS.home}>
                    <Link to={RUTAS.home}>Home</Link>
                </Menu.Item>

                <Menu.Item className="menu-top__menu-item" key={'1'}>
                    <Link to={RUTAS.login}>Recetas</Link>
                </Menu.Item>

                <Menu.Item className="menu-top__menu-item" key={'2'}>
                    <Link to={RUTAS.login}>Favoritos</Link>
                </Menu.Item>
            </Menu>
        </>
    );
};
