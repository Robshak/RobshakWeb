import type { FC } from 'react';
import { Text } from 'shared/ui';

export const Summary: FC = () => {
  return (
    <Text view={'body'} weight={'light'}>
      Frontend Developer with 1 year of experience in production. Proficient in JavaScript,
      TypeScript, React.js, and Next.js. Experienced in optimizing deployment processes, enhancing
      UI development workflows, and building high-performance large-scale applications. Extensive
      experience in developing applications using the Feature-Sliced Design (FSD) methodology to
      simplify architecture and scale complex, extensible systems.
    </Text>
  );
};
