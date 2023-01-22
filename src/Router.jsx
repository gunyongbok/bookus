import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Mylibrary from './router/Mylibrary';
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
            {
                path: 'mylibrary',
                element: <Mylibrary />,
            },
        ],
    },
]);

export default Router;
