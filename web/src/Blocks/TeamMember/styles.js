import styled, { css } from 'styled-components';
import AvatarDefault from 'Assets/images/avatar.png';

export const MemberWrapper = styled.div`
  width: 452px;
  height: 100px;
  background: #ffffff;
  border: 1px solid #e9eff4;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  margin: 10px 0px;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;
export const MemberWrapperLeft = styled.div`
  display: flex;
`;
export const Avatar = styled.div`
  width: 60px;
  height: 60px;
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
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #000000;
  margin-left: 12px;
`;
export const Position = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #666666;
`;
