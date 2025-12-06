import { AnimatePresence, motion } from 'motion/react';
import { Main, ProjectPage, Projects } from 'pages';
import type { FC } from 'react';
import { RouterProvider } from 'react-router/dom';
import { createBrowserRouter, Outlet, useLocation } from 'react-router-dom';

const AnimatedLayout = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
};

const router = createBrowserRouter([
  {
    element: <AnimatedLayout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/projects/:id',
        element: <ProjectPage />,
      },
    ],
  },
]);

export const AppProvider: FC = () => {
  return <RouterProvider router={router} />;
};
