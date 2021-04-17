import React, { useState } from 'react';
import { TeamMembersWrapper } from 'Components/TeamMembersWrapper/index';
import { ProjectsWrapper } from 'Components/ProjectsWrapper/index';
import { ModalComponent } from 'Blocks/Modal/index';
import { ModalContent } from 'Blocks/ModalContent/index';

export const Home = () => {
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
      <ModalComponent
        showModal={showModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        isModalVisible={isModalVisible}
        title="Participants"
        childrenContent={<ModalContent />}
      />
      <ProjectsWrapper />
      <TeamMembersWrapper />
    </>
  );
};
