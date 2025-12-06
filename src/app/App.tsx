import { createRoot } from 'react-dom/client';

import './global.scss';
import { AppProvider } from '@/app/router/AppRouter.tsx';

createRoot(document.getElementById('root')!).render(<AppProvider />);
