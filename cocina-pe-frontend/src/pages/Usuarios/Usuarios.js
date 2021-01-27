import React, { useState, useEffect } from "react";
import { Row, Col, Button, PageHeader,  Divider, Space, Table } from "antd";
import { HomeOutlined, EditOutlined } from "@ant-design/icons";
import Modal from "../../components/Modal";
import { listaUsuarios } from "../../api/usuarios";
// import AddUsuarioModal from "../../components/Usuarios/AddUsuarioModal";
// import EditUsiarioModal from "../../components/Usuarios/EditUsiarioModal";
import "./Usuarios.scss";
import "../Container.scss"

export default function Usuario() {
  // const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  // const [modalContent, setModalContent] = useState(null);
  const [reloadUsuario, setReloadUsuario] = useState(false);
  const [baseData, setBaseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await listaUsuarios();
      if (response) {
        let newArr = response.data.map(function (item) {
          return {
            _id: item._id,
            correo: item.correo,
            nombre: `${item.nombres} ${item.apellido_paterno} ${item.apellido_materno}`,
          };
        });
        setBaseData(newArr);
        setIsLoading(false);
      }
      setReloadUsuario(false)
    }
    fetchData();
  }, [reloadUsuario]);

  const addUsuario = () => {
    // setIsVisibleModal(true);
    // setModalTitle("Agregar usuario");
    // setModalContent(<AddUsuarioModal setIsVisibleModal={setIsVisibleModal} setReloadUsuario={setReloadUsuario}/>);
  };

  const editUsuario = (key) => {
    // setIsVisibleModal(true);
    // setModalTitle("Editar usuario");
    // setModalContent(<EditUsiarioModal setIsVisibleModal={setIsVisibleModal} setReloadUsuario={setReloadUsuario} idUsuario={key} />);
  };

  const columns = [
    {
      title: "Nombre",
      dataIndex: "nombre",
      key: "nombre",
      sorter: (a, b) => a.nombre.localeCompare(b.nombre),
      sortDirections: ["descend", "ascend"],
      render: (text) => text,
    },
    {
      title: "Acciones",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
            {" "}
            <Button
                type="primary"
                icon={<EditOutlined />}
                onClick={() => editUsuario(record._id)}
            />
        </Space>
      ),
    },
  ];

  return (
    <>
      <div className="master-container"> 
        <PageHeader
          className="site-page-header"
          title="Usuarios"
          extra={[
            <Button
              key="1"
              type="primary"
              icon={<HomeOutlined />}
              onClick={addUsuario}
            >
              Nuevo usuario
            </Button>,
          ]}
        >
          <Divider style={{ marginTop: "0px" }} />
          <Row>
            <Col lg={1} />
            <Col lg={22}>
              <Table
                  bordered
                  columns={columns}
                  dataSource={baseData}
                  rowKey={(record) => record._id}
                  loading={isLoading}
              />
            </Col>
            <Col lg={1} />
          </Row>
        </PageHeader>
        {/* <Modal
          title={modalTitle}
          isVisible={isVisibleModal}
          setIsVisible={setIsVisibleModal}
          footer={false}
        >
          {modalContent}
        </Modal> */}
      </div>
    </>
  );
}

