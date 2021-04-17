import React from 'react';
import { Project } from 'Blocks/Project/index';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import {
  ProjectsContainer,
  ProjectsHeader,
  ProjectsBlocks,
  ProjectsTitle,
  ViewAllProjects,
} from './styles';

export const ProjectsWrapper = () => {
  const { t } = useTranslation('common');

  return (
    <ProjectsContainer>
      <ProjectsHeader>
        <ProjectsTitle>{t('projects.lastProjects')}</ProjectsTitle>
        <ViewAllProjects href="#">
          {t('projects.viewAll')}
          <FontAwesomeIcon
            icon={faLongArrowAltRight}
            style={{ marginLeft: '5px' }}
          />
        </ViewAllProjects>
      </ProjectsHeader>
      <ProjectsBlocks>
        <Project
          image="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
          title="ToolKit"
          time="2 hours ago"
        />
        <Project
          image="http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg"
          title="ToolKit"
          time="5 hours ago"
        />
      </ProjectsBlocks>
    </ProjectsContainer>
  );
};
