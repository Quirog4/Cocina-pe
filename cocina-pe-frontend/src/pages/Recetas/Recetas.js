import React, { useState, useEffect, useMemo } from "react";
import {
  Row,
  Col,
  Table,
  Space,
  Modal,
  PageHeader,
  Input,
  Tag,
  Image,
  Divider,
  List,
  Avatar,
  Card,
  Button
} from "antd";
import { HeartTwoTone } from '@ant-design/icons'
import { Link } from "react-router-dom";
import { obtenerReceta, listarRecetas } from "../../api/receta";
import {useParams} from 'react-router-dom'
import "./Recetas.scss";

const props = {
  rowSelection: {},
};


export default function Recetas() {
  const {id} = useParams();
  const [receta, setReceta] = useState(null);
  const [baseDataReceta, setBaseDataReceta] = useState([]);
  const [baseDataIngredientes, setBaseDataIngredientes] = useState([]);
  const [baseDataPreparacion, setBaseDataPreparacion] = useState([]);
  const [imagen, setImagen] = useState('');
  const [reload, setReload] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      const listar = async () => {
        const response = await obtenerReceta(id);
        setBaseDataReceta(response.data)
        const [recetaEspecifica] =response.data
        console.log(recetaEspecifica.ingredientes.length);
        
        // setReceta(recetaEspecifica);
        let newArrIngredientes = recetaEspecifica.ingredientes.length != 0 ? recetaEspecifica.ingredientes.map(function (item) {
          return {
            ingrediente: item.ingrediente,
            ingrediente_nombre: item.ingrediente_nombre,
            cantidad: item.cantidad + ' '+ item.unidad,
          };
        }) : [];
        let newArrPreparacion = recetaEspecifica.preparacion.length != 0 ? recetaEspecifica.preparacion.map(function (item) {
          return {
            detalle: item.detalle,
            url_imagen: item.url_imagen,
          };
        }): [];
        setBaseDataIngredientes(newArrIngredientes)
        setBaseDataPreparacion(newArrPreparacion)
        setImagen(recetaEspecifica.ruta_imagen)
        console.log(baseDataIngredientes);
        setIsLoading(false);
        setReload(false);
      }
      listar();
  },[reload])
  
  const columnsIngredientes = [
    {
      title: 'Ingredientes',
      dataIndex: 'ingrediente_nombre',
      key: "ingrediente",
    },
    {
      title: 'Cantidad',
      dataIndex: 'cantidad',
      key: "cantidad",
    },
  ];


  return (
    <> 
      <div className="master-container">
      <Row>
        <Col span={23}>
          <List
            loading={isLoading}
            itemLayout="horizontal"
            dataSource={baseDataReceta}
            renderItem={item => (
              <List.Item actions={[            
                <Button
                  type="dashed"
                  icon={<HeartTwoTone twoToneColor="#eb2f96" />}
                />]}
              >
                <List.Item.Meta className='list-item-meta-receta'
                  avatar={<Avatar size={64} src={item.usuario.url_avatar} />}
                  title={item.nombre}
                  description={<>Por: <a href={`/cocina/usuarios/${item._id}`}>{item.usuario.nombres + ' ' + item.usuario.apellido_paterno + ' ' +  (item.usuario.apellido_materno.length != 0 ? item.usuario.apellido_materno : '')}</a></>}
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
      <Divider/>

      <Row>
        <Col span={6} offset={1}><h2> Lista de ingredientes</h2> </Col>
      </Row>

      <Row>
        <Col span={1}></Col>
        <Col span={11}>
          <Table
              size="middle"
              columns={columnsIngredientes}
              dataSource={baseDataIngredientes}
              rowSelection = { false }
              rowKey={(record) => record._id}
              loading={isLoading}
              pagination={false}
              {...props}
            />
        </Col>
        <Col span={2}></Col>
        <Col span={9}>
          <Image preview={true} src={imagen}/>
        </Col>
        <Col span={1}></Col>
      </Row>
      <Divider />
      <Row>
        
      </Row>
        <Col span={6} offset={1}><h2> Preparación</h2> </Col>
      <Row>
        <Col span={1}></Col>
        <Col span={22}>
          <div className="site-card-wrapper">
            <Row gutter={16}>
              {
                baseDataPreparacion.map((item, i=0) => (
                  <>
                    <Col span={1}></Col>
                    <Col span={6}>
                      <Card type="inner" style={{ width: 390 }}hoverable className='receta-card' title={`Paso ${i + 1}`} bordered={true} cover={
                          <Row>
                            <Col span={22} offset={1}>
                              <br/>
                              {item.url_imagen.length != 0 ? ( <Avatar size={360}
                                src={item.url_imagen}
                                shape="square"
                              />) : (<></>)}
                            </Col>
                          </Row>
                      }>
                        {item.detalle}
                      </Card>
                    </Col>
                    <Col span={1}></Col>
                  </>
                ))
              }
            </Row>
          </div>
          
        </Col>
        <Col span={1}></Col>
      </Row>
      <br/>
      </div>
    </>
  );
}

