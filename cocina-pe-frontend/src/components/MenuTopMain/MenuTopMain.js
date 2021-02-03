import React, {useState, useContext} from 'react';
import { Menu, Button, Row, Col, Space } from 'antd';
import { Link } from "react-router-dom";
import './MenuTopMain.scss'
import { authContext } from "../../providers/AuthContext";
import { RUTAS } from "../../config/constantes";
import Modal from "../Modal";
import AddRecetaModal from '../Recetas/AddRecetaModal'
import {
    HomeOutlined,
    UserOutlined,
    ScheduleOutlined,
    PoweroffOutlined,
    TeamOutlined,
    PlusCircleFilled
  } from "@ant-design/icons";


export default function MenuTopMain(props) {
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null);
    const {auth, onLogOut} = props;

    const addReceta = () => {
        setIsVisibleModal(true);
        setModalTitle("Nueva receta");
        setModalContent(
          <AddRecetaModal
            setIsVisibleModal={setIsVisibleModal}
          />
        );
      };

    return (
        <>
            
            <h1 className="menu-top__logo">COCINA PE</h1>
            {auth.data.tipo_usuario === "admin" ? (
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item className="menu-top__menu-item" key={RUTAS.cocina}>
                        <Link to={RUTAS.cocina}>Inicio</Link>
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
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item className="menu-top__menu-item" key={RUTAS.cocina}>
                        <Link to={RUTAS.cocina}>Inicio</Link>
                    </Menu.Item>
                    <Menu.Item className="menu-top__menu-item" key={RUTAS.platillo}>
                        <Link to={RUTAS.platillo}>Platillos</Link>
                    </Menu.Item>
                    <Menu.Item className="menu-top__menu-item" key={RUTAS.favorito}>
                        <Link to={RUTAS.favorito}>Favoritos</Link>
                    </Menu.Item>
                    
                </Menu>
            )} 

            <div className="menu-top__btn-header">
            <Space>
                <Button
                type="primary"
                icon={<PlusCircleFilled twoToneColor="#fa541c" />}
                onClick={addReceta}
                >
                Nueva Receta
                </Button>
                
                <Button
                type="primary"
                icon={<PoweroffOutlined />}
                href={`/`}
                onClick={onLogOut}
                >
                Salir
                </Button>
            </Space>
            </div>
            <Modal
                title={modalTitle}
                isVisible={isVisibleModal}
                setIsVisible={setIsVisibleModal}
                footer={false}
            >
                {modalContent}
            </Modal>
        </>
    );
};

