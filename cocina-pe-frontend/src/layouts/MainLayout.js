import React, { useState, useContext } from "react";
import { Layout, Menu, Button, Typography, Image, Avatar } from "antd";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  UserOutlined,
  ScheduleOutlined,
  PoweroffOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import Home from "../pages/Home";
import { authContext } from "../providers/AuthContext";
import PrivateRoute from "../components/PrivateRoute";
import "./MainLayout.scss";
import { RUTAS } from "../config/constantes";
import MenuTop from '../components/MenuTop'
import MenuTopMain from '../components/MenuTopMain'


const { Content, Sider, Header, Footer } = Layout;
const { Title } = Typography;

export default function MainLayout(props) {
  const { routes } = props;
  const { setAuthData, auth } = useContext(authContext);
  let [collapsed, setCollapsed] = useState(false);

  let onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const onLogOut = () => {
    setAuthData(null);
    
  };

  if (!auth.data && !auth.loading) { 
    return (
      <>
        <Route path='/' component={Home}/>
        <Redirect to='/' />
      </>
    )
  }

  if (auth.data && !auth.loading) {
    return (
      <Layout>
      {/*TO DO: Menu sider*/}
          <Layout className="layout-main">
              <Header className="layout-main__header">
                  <MenuTopMain auth={auth}/>
              </Header>
              <div className="layout-main__header-brown"></div>
              <Content className="layout-main__content">
                  <LoadRoutes routes={routes}/>
              </Content>
              <Footer className="layout-main__footer">Footer</Footer>
          </Layout>
      </Layout>
    );
  }

  return null;
}

function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <PrivateRoute
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}


// <Layout className="site-layout">
// <Header>
//   <Image className="logo" src={logo}/>
//   <div className="header">
//     <Button
//       className="header-button"
//       type="primary"
//       icon={<PoweroffOutlined />}
//       onClick={onLogOut}
//     >
//       Salir
//     </Button>
//     <Title
//       level={4}
//       style={{ color: "white" }}
//     >{`${auth.data.nombres} ${auth.data.apellidos}`}</Title>
//   </div>
// </Header>
// <Layout style={{ minHeight: "90vh" }}>
//   <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
//     <div className="logo" />

//     {auth.data.tipo_usuario === "admin" ? (
//       <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
//         <Menu.Item key={RUTAS.asistencia} icon={<ScheduleOutlined />}>
//           <Link to={RUTAS.asistencia}>Asistencia</Link>
//         </Menu.Item>
//         <Menu.Item key={RUTAS.empleados} icon={<UserOutlined />}>
//           <Link to={RUTAS.empleados}>Empleados</Link>
//         </Menu.Item>
//         <Menu.Item key={RUTAS.sede} icon={<HomeOutlined />}>
//           <Link to={RUTAS.sede}>Sedes</Link>
//         </Menu.Item>
//         <Menu.Item key={RUTAS.usuarios} icon={<TeamOutlined />}>
//           <Link to={RUTAS.usuarios}>Usuarios</Link>
//         </Menu.Item>
//       </Menu>
//     ) : (
//       <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
//         <Menu.Item key={RUTAS.asistencia} icon={<ScheduleOutlined />}>
//           <Link to={RUTAS.asistencia}>Asistencia</Link>
//         </Menu.Item>
//       </Menu>
//     )}
//   </Sider>
//   <Content style={{ margin: "20px" }}>
//     <div className="site-layout-background">
//       <LoadRoutes routes={routes} />
//     </div>
//   </Content>
// </Layout>
// </Layout>