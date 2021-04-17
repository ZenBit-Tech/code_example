import React from 'react';
import { ModalComponent } from 'Blocks/Modal/index';
import { ModalContent } from 'Blocks/ModalContent/index';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Modal block', () => {
  const showModalFn = jest.fn();
  const handleOkFn = jest.fn();
  const handleCancelFn = jest.fn();

  test('Modal', () => {
    render(
      <ModalComponent
        showModal={showModalFn}
        handleOk={handleOkFn}
        handleCancel={handleCancelFn}
        isModalVisible={true}
        title="Participants"
        childrenContent={<ModalContent />}
      />,
    );
    const input = screen.getByText('Participants');
    expect(input).toBeInTheDocument();
  });
});
