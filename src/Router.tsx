import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './screen/Home/page';
import NotHavePermission from './screen/403';
import EmployeeInfo from './screen/EmployeeInfo/page';


const RoutesComponent = () => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={<Home/>} 
      />
      <Route 
        path='/employee-info'
        element={<EmployeeInfo/>}
      />
      <Route 
        path="/403" 
        element={<NotHavePermission/>} 
      />
    </Routes>
  );
};

export default RoutesComponent;