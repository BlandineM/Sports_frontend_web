import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home, Sessions, User } from '../container';

const Router = () => {
  return (
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/sessions' Component={Sessions} />
      <Route path='/user' Component={User} />
    </Routes>
  );
};
export default Router;
