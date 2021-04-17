import React from 'react';
import { MemberWrapper, Avatar, Name } from './styles.js';

export type ParticipantProps = {
  link: string;
  name: string;
};

export const Participant = ({ link, name }: ParticipantProps) => (
  <>
    <MemberWrapper>
      <Avatar link={link}></Avatar>
      <Name>{name}</Name>
    </MemberWrapper>
  </>
);
