import { Route, Routes, useRoutes } from 'react-router-dom';
import React from 'react';
import Home from './screen/Home/page';
import NotHavePermission from './screen/403';
import LoginPageComponent from "./screen/Login"
import NotFoundComponent from './screen/404';
import googleAnalyticsService from './utils/google_analytics';

const RoutesComponent = () => {
  googleAnalyticsService.sendPageView();
  const routes = [
    { path: '/', element: <Home /> },
    { path: '/login', element : <LoginPageComponent/>},
    { path: '/403', element: <NotHavePermission /> },
    { path: '/*', extract: true, element: <LoginPageComponent /> },
  ];

  const element = useRoutes(routes);

  return element;
};

export default RoutesComponent;