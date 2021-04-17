import styled, { css } from 'styled-components';
import AvatarDefault from 'Assets/images/avatar.png';

export const MemberWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 0px 12px;
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  background-size: cover;
  background-position: center;
  border-radius: 100%;
  ${(props) =>
    css`
      background-image: url(${props.link ? props.link : AvatarDefault});
    `};
`;

export const Name = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #000000;
  margin-left: 10px;
`;
