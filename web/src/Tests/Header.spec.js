import React from 'react';
import { Header } from 'Components/Header/index';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

describe('Header block', () => {
  test('Header', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const roleValue = screen.getByRole('header');
    expect(roleValue).toBeInTheDocument();
  });
});
