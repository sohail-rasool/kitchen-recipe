import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Signin from '../pages/auth/Signin/Signin';
import Page404 from '../pages/404/404Page';

export const siteMap = {
  HomePage: {
    title: 'Home',
    path: '/',
    description: 'My home page',
  },
  Signin: {
    title: 'Log in page',
    path: '/signin',
    description: 'Login Page',
  },
};

/**
 * Routes component containing routes for the whole application
 * @returns {JSX}
 */
const RoutesComponent = () => (
  <Routes>
    <Route exact path={siteMap.HomePage.path} element={<Home />} />
    <Route path={siteMap.Signin.path} element={<Signin />} />
    <Route path='*' element={<Page404 />} />
  </Routes>
);

export default RoutesComponent;
