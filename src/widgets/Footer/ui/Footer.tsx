import clsx from 'clsx';
import type { CSSProperties, FC } from 'react';
import { Link, Text } from 'shared/ui';
import { Categories } from 'widgets/Footer/model';

import s from './Footer.module.scss';

type TFooterProps = {
  className?: string;
};

export const Footer: FC<TFooterProps> = (props) => {
  const { className } = props;
  return (
    <div className={clsx(s.container, className)}>
      <Text view={'display2'}>Where to Find Me</Text>
      <div className={s.categories}>
        {Categories.map((category) => (
          <div className={s.category}>
            <Text view={'header1'}>{category.name}</Text>
            <div className={s.links}>
              {category.links.map((link) =>
                link.href ? (
                  <Link href={link.href} toAnotherPage className={s.link}>
                    <div className={s.icon}>{link.icon}</div>
                    <Text view="body">
                      <span
                        className={s.linkText}
                        data-text={link.name}
                        style={{ '--hover-gradient': link.gradient } as CSSProperties}
                      >
                        {link.name}
                      </span>
                    </Text>
                  </Link>
                ) : (
                  <div className={s.link}>
                    <div className={s.icon}>{link.icon}</div>
                    <Text view="body">
                      <span
                        className={s.linkText}
                        data-text={link.name}
                        style={{ '--hover-gradient': link.gradient } as CSSProperties}
                      >
                        {link.name}
                      </span>
                    </Text>
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
