import React from 'react';
import { create } from 'react-test-renderer';
import { TeamMember } from 'Blocks/TeamMember/index';

describe('Team member block', () => {
  test('Team member', () => {
    const memberBlock = create(
      <TeamMember
        link="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
        name="Alexander Morozov"
        position="Manager"
      />,
    );

    const testInstance = memberBlock.root;
    expect(memberBlock.toJSON()).toMatchSnapshot();
    expect(testInstance.findByType(TeamMember).props.position).toBe('Manager');
  });
});
