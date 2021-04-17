import React from 'react';
import { Layout } from 'antd';
import LogoImg from 'Assets/images/logo.png';
import { HeaderLogo, Avatar, NavWrapper } from './styles.js';
import {
  IconNotification,
  IconPlasts,
  IconDownload,
} from 'Assets/icons/header-icons';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const { Header } = Layout;
  return (
    // eslint-disable-next-line jsx-a11y/aria-role
    <Header className="header" role="header">
      <HeaderLogo src={LogoImg} />
      <NavWrapper>
        <NavLink to="/home" activeClassName="selectedIcon" className="iconNav">
          <IconNotification />
        </NavLink>
        <NavLink to="/test" activeClassName="selectedIcon" className="iconNav">
          <IconPlasts />
        </NavLink>
        <NavLink
          to="/download"
          activeClassName="selectedIcon"
          className="iconNav"
        >
          <IconDownload />
        </NavLink>
        <Avatar link="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"></Avatar>
      </NavWrapper>
    </Header>
  );
};
