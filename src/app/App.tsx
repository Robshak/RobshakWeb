import { createRoot } from 'react-dom/client';
import { Preloader } from 'shared/ui';

import './global.scss';
import { AppProvider } from '@/app/router/AppRouter.tsx';

createRoot(document.getElementById('root')!).render(
  <>
    <Preloader />
    <AppProvider />
  </>,
);
