import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './login/Login';
import LoginResult from './login/LoginResult';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Login />,
            },
            {
                path: 'kakao',
                element: <LoginResult />,
            },
        ],
    },
]);

export default Router;
