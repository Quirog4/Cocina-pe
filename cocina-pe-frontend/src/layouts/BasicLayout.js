import React, {useContext} from 'react'
import {Switch} from 'react-router-dom';
import PublicRoute from '../components/PublicRoute'
import { Layout } from 'antd';
import MenuTop from '../components/MenuTop'
import { authContext } from "../providers/AuthContext";
import { Route,  Redirect, useHistory } from "react-router-dom";
import Home from "../pages/Home";
import './BasicLayout.scss'

export default function BasicLayout(props) {
    const { routes } = props;
    const { setAuthData, auth } = useContext(authContext);
    const {Header, Content, Footer} = Layout;

    if (auth.data && !auth.loading) { 
      return (
        <>
          <Route path='/cocina' component={Home}/>
          <Redirect to='/cocina' />
        </>
      )
    }

    return (
        <Layout>
          {/*TO DO: Menu sider*/}
          <Layout className="layout-basic">
              <Header className="layout-basic__header">
                  <MenuTop />
              </Header>
              <div className="layout-basic__header-brown"></div>
              <Content className="layout-basic__content">
                  <LoadRoutes routes={routes}/>
              </Content>
              <Footer className="layout-basic__footer">Footer</Footer>
          </Layout>
      </Layout>
    )
}

function LoadRoutes({routes}) {
    return (
        <Switch>
          {routes.map((route, index) => (
            <PublicRoute
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      );
}
