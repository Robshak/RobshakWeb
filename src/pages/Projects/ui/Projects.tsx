import clsx from 'clsx';
import type { FC } from 'react';
import { Breadcrumbs } from 'shared/ui';

import s from './Projects.module.scss';
import { MyProjects } from '../model';
import { ProjectItem } from './ProjectItem';

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
