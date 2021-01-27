import React from "react";
import { Modal as ModalAntd } from "antd";

export default function Modal(props) {
  // console.log(props)
  const { children, title, isVisible, setIsVisible, footer, ...other } = props;
  return (
    <ModalAntd
      title={title}
      centered
      visible={isVisible}
      onCancel={() => setIsVisible(false)}
      footer={footer}
      // maskClosable={false}
      destroyOnClose={true}
      {...other}
    >
      {children}
    </ModalAntd>
  );
}

