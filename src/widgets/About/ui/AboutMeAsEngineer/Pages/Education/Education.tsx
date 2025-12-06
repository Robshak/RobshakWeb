import type { FC } from 'react';
import { Text } from 'shared/ui';

import s from './Education.module.scss';

export const Education: FC = () => {
  return (
    <div className={s.container}>
      <Text view={'body'} weight={'semibold'}>
        ITMO University – Saint Petersburg National Research University of Information Technologies,
        Mechanics and Optics
      </Text>
      <div className={s.bottom}>
        <Text view={'body'} weight={'semibold'}>
          Bachelor of Science in Software Engineering
        </Text>
        <Text view={'body'} weight={'light'} italic>
          Saint Petersburg | Expected Graduation: 2028
        </Text>
      </div>
    </div>
  );
};
