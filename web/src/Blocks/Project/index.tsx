import React from 'react'; // we need this to make JSX compile
import {
  ProjectWrapper,
  ProjectWrapperTop,
  ProjectWrapperBottom,
  ProjectWrapperBottomLeft,
  ProjectWrapperBottomRight,
  Title,
  Time,
  Subscriber,
} from './styles.js';

export type ProjectProps = {
  image?: string;
  title: string;
  time: string;
};

export const Project = ({ title, image, time }: ProjectProps) => (
  <ProjectWrapper>
    <ProjectWrapperTop image={image} />
    <ProjectWrapperBottom>
      <ProjectWrapperBottomLeft>
        <Title>{title}</Title>
        <Time>{time}</Time>
      </ProjectWrapperBottomLeft>
      <ProjectWrapperBottomRight>
        <Subscriber image={image} />
        <Subscriber image={image} />
        <Subscriber image={image} />
      </ProjectWrapperBottomRight>
    </ProjectWrapperBottom>
  </ProjectWrapper>
);
