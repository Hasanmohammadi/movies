import "antd/dist/antd.css";
import style from "./../firstPage.module.css";
import { Modal, Button } from "antd";
import { useState } from "react";
import ModalForm from "./modalForm";

export interface ModalProps {}

const ModalMovie: React.FC<ModalProps> = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal} className={style.addBtn}>
        Add New Movies
      </Button>
      <Modal
        title="Add New Movies"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        style={{ textAlign: "center" }}
      >
        <ModalForm />
      </Modal>
    </>
  );
};

export default ModalMovie;
