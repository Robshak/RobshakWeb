import clsx from 'clsx';
import type { TProject } from 'entities/project';
import type { FC } from 'react';
import { Link, Text } from 'shared/ui';

import s from './ProjectItem.module.scss';

type TProjectItemProps = {
  className?: string;
  project: TProject;
};

export const ProjectItem: FC<TProjectItemProps> = (props) => {
  const { className, project } = props;

  return (
    <Link href={`/projects/${project.id}`} className={clsx(s.container, className)}>
      <Text view={'header2'} withLines align={'offset'} className={s.header} weight={'semibold'}>
        {project.name}
      </Text>
      <img src={project.imageForItem} alt="" className={s.image} />
      <Text view={'body'} className={s.description} weight={'light'}>
        {project.description}
      </Text>
    </Link>
  );
};
