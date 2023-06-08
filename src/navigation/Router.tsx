import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { RootErrorBoundary } from './ErrorBoundary';
import { Home, Sessions, User } from '../container';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    loader: () => ({ message: 'Hello Data Router!' }),

    errorElement: <RootErrorBoundary />,
  },
  {
    path: 'sessions',
    element: <Sessions />,
  },
  {
    path: 'user',
    element: <User />,
  },
]);

export default router;
