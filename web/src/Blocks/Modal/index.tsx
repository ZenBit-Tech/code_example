import React from 'react';
import { Modal, Button } from 'antd';

export type ModalProps = {
  showModal(): void;
  handleOk(): void;
  handleCancel(): void;
  isModalVisible: boolean;
  title: string;
  childrenContent: React.ReactNode;
};

export const ModalComponent = ({
  showModal,
  handleOk,
  handleCancel,
  isModalVisible,
  title,
  childrenContent,
}: ModalProps) => {
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title={title}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={450}
        className="modal-participants"
      >
        {childrenContent}
      </Modal>
    </>
  );
};
