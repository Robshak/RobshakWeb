import { MyProjects } from 'pages/Projects/model';
import type { FC } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import GithubIcon from 'shared/icons/GithubIcon.svg?react';
import VercelIcon from 'shared/icons/VercelIcon.svg?react';
import YoutubeIcon from 'shared/icons/YoutubeIcon.svg?react';
import { Breadcrumbs, Text } from 'shared/ui';

import s from './ProjectPage.module.scss';

export const ProjectPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = MyProjects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const imageSrc = project.imageForPage || project.imageForItem;

  return (
    <div className={s.container}>
      <Breadcrumbs items={[{ label: 'My Projects', path: '/projects' }, { label: project.name }]} />

      <div className={s.content}>
        <div className={s.imageWrapper}>
          <img src={imageSrc} alt={project.name} />
        </div>

        <div className={s.info}>
          <div className={s.links}>
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className={s.linkItem}>
                <GithubIcon />
                <Text view={'body'}>Github</Text>
              </a>
            )}
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noreferrer" className={s.linkItem}>
                <VercelIcon />
                <Text view={'body'}>Demo</Text>
              </a>
            )}
            {project.youtubeUrl && (
              <a href={project.youtubeUrl} target="_blank" rel="noreferrer" className={s.linkItem}>
                <YoutubeIcon />
                <Text view={'body'}>Youtube</Text>
              </a>
            )}
          </div>
        </div>

        <div className={s.details}>
          <div className={s.section}>
            <Text view={'header2'}>Description</Text>
            <Text view={'body'}>{project.description}</Text>
          </div>
          <div className={s.section}>
            <Text view={'header2'}>Stack</Text>
            <div className={s.stackList}>
              {project.stack.map((tech) => (
                <Text key={tech} view={'body'}>
                  {tech}
                </Text>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
