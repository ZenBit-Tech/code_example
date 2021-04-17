import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  width: 452px;
`;
export const ProjectsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ProjectsBlocks = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
`;
export const ProjectsTitle = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: flex-end;
  color: #000000;
`;
export const ViewAllProjects = styled.a`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: flex-end;
  text-align: right;
  color: #000000;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: grey;
  }
`;
