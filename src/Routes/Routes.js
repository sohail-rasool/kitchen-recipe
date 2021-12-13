import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Signin from '../pages/auth/Signin/Signin';
import Signup from '../pages/auth/Signup/Signup';
import Feed from '../pages/Feed/Feed';
import Page404 from '../pages/404/404Page';

export const siteMap = {
  HomePage: {
    title: 'Home',
    path: '/',
    description: 'My home page',
  },
  Signin: {
    title: 'Login page',
    path: '/signin',
    description: 'Login Page',
  },
  Signup: {
    title: 'signup page',
    path: '/signup',
    description: 'Signup Page',
  },
  FeedPage: {
    title: 'feed page',
    path: '/feed',
    description: 'Feed Page',
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
    <Route path={siteMap.Signup.path} element={<Signup />} />
    <Route path={siteMap.FeedPage.path} element={<Feed />} />
    <Route path='*' element={<Page404 />} />
  </Routes>
);

export default RoutesComponent;
