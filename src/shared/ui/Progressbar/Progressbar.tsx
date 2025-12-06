import clsx from 'clsx';
import {
  type FC,
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
} from 'react';

import s from './Progressbar.module.scss';

type TProgressbarView = 'small' | 'large';

type TProgressbarProps = {
  maximum: number;
  current: number;
  setCurrent: (newCurrent: number) => void;
  className?: string;
  view?: TProgressbarView;
};

export const Progressbar: FC<TProgressbarProps> = (props) => {
  const { maximum, current, setCurrent, className, view = 'large' } = props;

  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [internalCurrent, setInternalCurrent] = useState(current);

  const safeMaximum = maximum <= 0 ? 1 : maximum;

  useEffect(() => {
    if (!isDragging) {
      setInternalCurrent(current);
    }
  }, [current, isDragging]);

  const getCurrentFromClientX = useCallback(
    (clientX: number): number => {
      const container = containerRef.current;
      if (!container) return 0;

      const rect = container.getBoundingClientRect();
      const relativeX = clientX - rect.left;
      const clampedX = Math.min(Math.max(relativeX, 0), rect.width || 1);
      const progress = clampedX / (rect.width || 1);

      return progress * maximum;
    },
    [maximum]
  );

  const handlePointerDown = (event: ReactMouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const newCurrent = getCurrentFromClientX(event.clientX);
    setIsDragging(true);
    setInternalCurrent(newCurrent);
  };

  const handlePointerMove = useCallback(
    (event: globalThis.MouseEvent) => {
      if (!isDragging) return;
      const newCurrent = getCurrentFromClientX(event.clientX);
      setInternalCurrent(newCurrent);
    },
    [getCurrentFromClientX, isDragging]
  );

  const handlePointerUp = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);

    const clamped = Math.min(Math.max(internalCurrent, 0), maximum);
    setCurrent(clamped);
  }, [isDragging, internalCurrent, maximum, setCurrent]);

  useEffect(() => {
    if (!isDragging) return;

    const handleWindowMove = (event: globalThis.MouseEvent) => {
      handlePointerMove(event);
    };

    const handleWindowUp = () => {
      handlePointerUp();
    };

    window.addEventListener('mousemove', handleWindowMove);
    window.addEventListener('mouseup', handleWindowUp);

    return () => {
      window.removeEventListener('mousemove', handleWindowMove);
      window.removeEventListener('mouseup', handleWindowUp);
    };
  }, [handlePointerMove, handlePointerUp, isDragging]);

  const displayedCurrent = isDragging ? internalCurrent : current;

  const rawProgress = displayedCurrent / safeMaximum;
  const clampedProgress = Math.min(Math.max(rawProgress, 0), 1);

  const translateX = (1 - clampedProgress) * 100;

  return (
    <div
      ref={containerRef}
      className={clsx(s.container, s[view], className)}
      aria-valuemin={0}
      aria-valuemax={maximum}
      aria-valuenow={displayedCurrent}
      role="progressbar"
      onMouseDown={handlePointerDown}
    >
      <div className={s.background} />

      <div
        className={clsx(s.line, { [s.lineDragging]: isDragging })}
        style={{ transform: `translateX(${-translateX}%)` }}
      >
        <div className={s.lineBody} />
        <div className={s.lineHead} />
      </div>
    </div>
  );
};
