import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TeamMember, TeamMemberProps } from 'Blocks/TeamMember/index';

export default {
  title: 'Team Member Block',
  component: TeamMember,
} as Meta;

const Template: Story<TeamMemberProps> = (args) => <TeamMember {...args} />;

export const DefaultMemberBlockWithAvatar = Template.bind({});
DefaultMemberBlockWithAvatar.args = {
  link:
    'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
  name: 'Alexander Morozov',
  position: 'Manager',
};

export const DefaultMemberBlockWithoutAvatar = Template.bind({});
DefaultMemberBlockWithoutAvatar.args = {
  name: 'Alexander Morozov',
  position: 'Manager',
};
