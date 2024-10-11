import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesComponent from './Router.tsx';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root') ?? document.body).render(
    <div className='w-screen h-screen bg-app'>
        <BrowserRouter>
            <RoutesComponent/>
        </BrowserRouter>
        <ToastContainer/>
    </div>
);