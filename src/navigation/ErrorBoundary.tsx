import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

export function RootErrorBoundary() {
  const error = useRouteError() as Error;

  return (
    <div>
      <h1>Uh oh, something went terribly wrong 😩</h1>
      <pre>{error.message || JSON.stringify(error)}</pre>
      <Link to='/'>Home</Link>
    </div>
  );
}
