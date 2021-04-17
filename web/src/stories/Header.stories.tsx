import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Header } from 'Components/Header/index';
import { BrowserRouter } from 'react-router-dom';
import 'App.css';

export default {
  title: 'Header',
  component: Header,
} as Meta;

const Template = () => (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);

export const HeaderComponent = Template.bind({});
