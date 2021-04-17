import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ModalComponent, ModalProps } from 'Blocks/Modal/index';
import { ModalContent } from 'Blocks/ModalContent/index';
import 'antd/dist/antd.css';
import 'index.css';

export default {
  title: 'Modal',
  component: ModalComponent,
} as Meta;

const Template: Story<ModalProps> = (args) => <ModalComponent {...args} />;

export const Modal = Template.bind({});

Modal.args = {
  isModalVisible: true,
  title: 'Participants',
  childrenContent: <ModalContent />,
};
