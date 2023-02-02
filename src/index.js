import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import App from './App';
import Router from './Router';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <RecoilRoot>
        <RouterProvider router={Router}>
            <App />
        </RouterProvider>
    </RecoilRoot>
    // </React.StrictMode>
);
