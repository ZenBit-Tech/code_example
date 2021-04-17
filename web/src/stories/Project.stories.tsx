import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Project, ProjectProps } from 'Blocks/Project/index';

export default {
  title: 'Project Block',
  component: Project,
} as Meta;

const Template: Story<ProjectProps> = (args) => <Project {...args} />;

export const DefaultProjectBlock = Template.bind({});
DefaultProjectBlock.args = {
  image:
    'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
  title: 'ToolKit',
  time: '2 hours ago',
};
