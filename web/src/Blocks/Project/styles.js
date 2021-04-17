import styled, { css } from 'styled-components';

export const ProjectWrapper = styled.div`
  width: 216px;
  height: 156px;
  border-radius: 6px 6px 6px 6px;
  background: #ffffff;
  &:hover {
    box-shadow: 0 0 10px rgb(0 0 0 / 50%);
  }
`;
export const ProjectWrapperTop = styled.div`
  height: 117px;
  background-size: cover;
  background-position: center;
  border-radius: 6px 6px 0px 0px;

  ${(props) =>
    css`
      background-image: url(${props.image});
    `};
`;
export const ProjectWrapperBottom = styled.div`
  border-radius: 0px 0px 6px 6px;
  display: flex;
  justify-content: space-between;
  height: calc(100% - 117px);
  align-items: center;
  padding: 0px 10px;
  filter: drop-shadow(0px 2.4px 2.4px rgba(0, 0, 0, 0.25));
`;
export const ProjectWrapperBottomLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ProjectWrapperBottomRight = styled.div`
  //background: green;
  height: 100%;
  width: 40%;
  display: flex;
  align-items: center;
`;
export const Title = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 8.4px;
  line-height: 10px;
  display: flex;
  align-items: flex-end;
  color: #000000;
  margin-bottom: 5px;
`;
export const Time = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 7.2px;
  line-height: 8px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.078px;
  color: #666666;
`;
export const Subscriber = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  background-size: cover;
  background-position: center;
  ${(props) =>
    css`
      background-image: url(${props.image});
    `};
`;
