import React from 'react'; // we need this to make JSX compile
import {
  MemberWrapper,
  MemberWrapperLeft,
  Avatar,
  Name,
  Position,
} from './styles.js';

export type TeamMemberProps = {
  link?: string;
  name: string;
  position: string;
};

export const TeamMember = ({ link, name, position }: TeamMemberProps) => (
  <MemberWrapper>
    <MemberWrapperLeft>
      <Avatar link={link} />
      <Name>{name}</Name>
    </MemberWrapperLeft>
    <Position>{position}</Position>
  </MemberWrapper>
);
