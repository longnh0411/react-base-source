import { Route, Routes, useRoutes } from 'react-router-dom';
import React from 'react';
import Home from './screen/Home/page';
import NotHavePermission from './screen/403';
import EmployeeInfo from './screen/EmployeeInfo/page';
import NotFoundComponent from './screen/404';

const RoutesComponent = () => {
  const routes = [
    { path: '/', element: <Home /> },
    { path: '/employee-info', element: <EmployeeInfo /> },
    { path: '/403', element: <NotHavePermission /> },
    { path: '/*', extract: true, element: <NotFoundComponent /> },
  ];

  const element = useRoutes(routes);

  return element;
};

export default RoutesComponent;