import clsx from 'clsx';
import type { FC } from 'react';
import ArrowLeft from 'shared/icons/arrowLeft.svg?react';
import { Link, Text } from 'shared/ui';

import s from './Breadcrumbs.module.scss';

export type BreadcrumbItem = {
  label: string;
  path?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
  backPath?: string;
};

export const Breadcrumbs: FC<BreadcrumbsProps> = (props) => {
  const { items, className, backPath } = props;

  let finalBackPath = backPath;
  if (!finalBackPath && items.length > 1) {
    finalBackPath = items[items.length - 2].path;
  }

  return (
    <header className={clsx(s.container, className)}>
      {finalBackPath && (
        <Link href={finalBackPath} className={s.linkBack}>
          <ArrowLeft className={s.icon} />
        </Link>
      )}

      <div className={s.breadcrumbs}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
              {index > 0 && (
                <Text view="display2" className={clsx(s.text, s.separator)}>
                  /
                </Text>
              )}

              {item.path && !isLast ? (
                <Link href={item.path} className={clsx(s.item, s.link)}>
                  <Text view="display2" className={s.text}>
                    {item.label}
                  </Text>
                </Link>
              ) : (
                <Text view="display2" className={clsx(s.text, s.item)}>
                  {item.label}
                </Text>
              )}
            </div>
          );
        })}
      </div>
    </header>
  );
};
