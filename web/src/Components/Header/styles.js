import styled, { css } from 'styled-components';
import AvatarDefault from 'Assets/images/avatar.png';

export const HeaderLogo = styled.img`
  width: 191px;
  height: 76px;
`;

export const IconButtonWrapper = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`;
export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  background-size: cover;
  background-position: center;
  border-radius: 100%;
  margin-left: 25px;
  ${(props) =>
    css`
      background-image: url(${props.link ? props.link : AvatarDefault});
    `};
`;

export const NavIcon = styled.img``;
