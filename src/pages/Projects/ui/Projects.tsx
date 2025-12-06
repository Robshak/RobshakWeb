import clsx from 'clsx';
import { MyProjects } from 'entities/project';
import type { FC } from 'react';
import { Breadcrumbs } from 'shared/ui';

import { ProjectItem } from './ProjectItem';
import s from './Projects.module.scss';

type TProjectsProps = {
  className?: string;
};

export const Projects: FC<TProjectsProps> = (props) => {
  const { className } = props;

  return (
    <div className={clsx(s.container, className)}>
      <Breadcrumbs items={[{ label: 'My Projects' }]} backPath="/" />
      <div className={s.projects}>
        {MyProjects.map((project) => (
          <ProjectItem project={project} className={s.project} />
        ))}
      </div>
    </div>
  );
};
