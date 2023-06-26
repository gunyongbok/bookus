import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Mylibrary from './router/Mylibrary';
import Login from './login/Login';
import LoginResult from './login/LoginResult';
import Search from './router/Search';
import BookList from './router/BookList';
import UserProfile from './router/UserProfile';
import BookReport from './router/BookReport';
import Storage from './router/Storage';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Mylibrary />,
            },
            {
                path: 'kakao',
                element: <LoginResult />,
            },
            {
                path: 'login',
                element: <Login />,
            },

            {
                path: 'booksearch',
                element: <Search />,
            },
            {
                path: 'booklist',
                element: <BookList />,
            },
            {
                path: 'bookreportstorage/:id',
                element: <Storage />,
            },
            {
                path: 'bookreport',
                element: <BookReport />,
            },
            {
                path: 'userprofile',
                element: <UserProfile />,
            },
        ],
    },
]);

export default Router;
