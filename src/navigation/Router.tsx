import React from 'react';
import { createBrowserRouter, useLoaderData } from 'react-router-dom';

import { RootErrorBoundary } from './ErrorBoundary';
import { Home, Sessions, User } from '../container';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    loader: () => ({ message: 'Hello Data Router!' }),
    Component() {
      const data = useLoaderData() as { message: string };
      return <h1>{data.message}</h1>;
    },
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
