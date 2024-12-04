import { createRoot } from 'react-dom/client'
import './index.css'
import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesComponent from './Router.tsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import googleAnalyticsService from './utils/google_analytics.tsx';
declare global {
    interface Window {
        dataLayer: any[];
        gtag: (...args: any[]) => void;
    }
}
googleAnalyticsService.load();

createRoot(document.getElementById('root') ?? document.body).render(
    <div className='w-screen h-screen bg-app'>
        <BrowserRouter>
            <RoutesComponent/>
        </BrowserRouter>
        <ToastContainer/>
    </div>
);