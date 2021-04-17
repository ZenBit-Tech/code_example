import React from 'react';
import { create } from 'react-test-renderer';
import { Project } from 'Blocks/Project/index';

describe('Project block', () => {
  test('Project', () => {
    const projectBlock = create(
      <Project
        image="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
        title="ToolKit"
        time="2 hours ago"
      />,
    );

    const testInstance = projectBlock.root;
    expect(projectBlock.toJSON()).toMatchSnapshot();
    expect(testInstance.findByType(Project).props.title).toBe('ToolKit');
  });
});
