import React from 'react';
import { TeamMember } from 'Blocks/TeamMember/index';
import { useTranslation } from 'react-i18next';
import { MembersWrapper, MembersWrapperTitle } from './styles';

export const TeamMembersWrapper = () => {
  const { t } = useTranslation('common');

  return (
    <MembersWrapper>
      <MembersWrapperTitle>{t('team.myTeam')}</MembersWrapperTitle>
      <TeamMember
        link="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
        name="Alexander Morozov"
        position="Manager"
      />
      <TeamMember name="Anna mirnova" position="Designer" />
      <TeamMember
        link="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
        name="Alexander Morozov"
        position="Manager"
      />
      <TeamMember name="Anna mirnova" position="Designer" />
    </MembersWrapper>
  );
};
