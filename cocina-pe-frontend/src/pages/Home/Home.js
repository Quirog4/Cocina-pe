import React, { useState, useEffect } from "react";
import { Row, Col, Button, PageHeader, Divider, Image, Card, Meta, Avatar } from "antd";
import { HomeOutlined, EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";
import Modal from "../../components/Modal";
import {listarPlatillos} from "../../api/platillo";
import "./Home.scss";
import "../Container.scss"
import image from "../../assets/img/png/tus_mejores_recetas.png"


export default function Home() {
//   const [isVisibleModal, setIsVisibleModal] = useState(false);
//   const [modalTitle, setModalTitle] = useState("");
//   const [modalContent, setModalContent] = useState(null);
  const [reloadPlatillos, setReloadPlatillas] = useState(false);
  const [platillos, setPlatillos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { Meta } = Card;
  useEffect(() => {
    async function fetchData() {
      const response = await listarPlatillos();
      setPlatillos(randomSort(response.data))
      console.log(platillos);
      setReloadPlatillas(false)
      setIsLoading(false);
      
    }
    fetchData();
  }, [reloadPlatillos]);

  const addSede = () => {
    console.log(platillos);
    

  };


  return (
    <>
      <div className="div-image">
          <Image src={image} className="site-page-image" preview={false}/>
      </div>
      <div className="master-container">
        <PageHeader
          // className="site-page-header"
          title="Home"
        >
          <Divider style={{ marginTop: "0px" }} />
          <div className="container">
            <div className="row">
            <Card
                style={{ width: 400 }}
                cover={
                  <img
                    width="300"
                    height="300"
                    alt="example"
                    src="https://comidaperuanaweb.org/wp-content/uploads/2018/10/Receta-de-Lomo-Saltado-de-Carne-Pollo-1-1-500x375.jpg"
                  />
                }
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Meta
                  title="Card title"
                  description="This is the description"
                />
            </Card>
            <Card
                style={{ width: 400 }}
                cover={
                  <img
                    width="300"
                    height="300"
                    alt="example"
                    src="https://t2.rg.ltmcdn.com/es/images/8/6/2/causa_limena_31268_600.jpg"
                  />
                }
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Meta
                  title="Card title"
                  description="This is the description"
                />
            </Card>
            </div>

          </div>
          <Button
              key="1"
              type="primary"
              icon={<HomeOutlined />}
              onClick={addSede}
            >
              Recargar
            </Button>
        </PageHeader> 

      </div>
    </>
  );
}

const seed = () => {
  let date = new Date();
  let day = date.getDay();
  let month = date.getMonth();
  let year = date.getFullYear();
  const semilla = Date.UTC(year, month, day)
  let resultado = Math.sin(semilla) * 10000; 
  return (resultado - Math.floor(resultado));
};

function randomSort(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    if(localStorage.getItem("authData").toString() === 'null' || JSON.parse(localStorage.getItem("authData")).tipo_usuario === 'user'){
      console.log('aa');
      
      randomIndex = Math.floor(seed() * currentIndex);
    }
    else{
      randomIndex = Math.floor(Math.random() * currentIndex);
    }
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


{/* <Row >
<Col lg={12}>
  <Card className="card"
    style={{ width: 400 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      title="Card title"
      description="This is the description"
    />
  </Card>
</Col>
<Col lg={12}>
  hola
</Col>
<Col lg={1}/>
<Col lg={22}>
  <List
    loading={isLoading}
    itemLayout="horizontal"
    // dataSource={platillos}
    bordered={true}
    pagination={{
      onChange: (page) => {},
      pageSize: 10,
    }}
    // renderItem={(item) => (
    //   <List.Item
    //     actions={[<Button type="primary" onClick={() => editSede(item._id)}>Modificar</Button>]}
    //   >
    //     <List.Item.Meta
    //       title={`${item.nombre ? item.nombre : ''}`}
    //       description={`${item.direccion ? item.direccion : ''}`}
    //     />
    //   </List.Item>
    // )}
  />
</Col> 
<Col lg={1} />
</Row> */}

{/* <Modal
  title={modalTitle}
  isVisible={isVisibleModal}
  setIsVisible={setIsVisibleModal}
  footer={false}
>
  {modalContent}
</Modal>*/ }