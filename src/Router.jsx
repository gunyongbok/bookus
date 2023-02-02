import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Mylibrary from './router/Mylibrary';
import Login from './login/Login';
import LoginResult from './login/LoginResult';
import ReportList from './router/ReportList';
import Search from './router/Search';
import BookList from './router/BookList';
import UserProfile from './router/UserProfile';

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
                path: 'bookreportlist',
                element: <ReportList />,
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
                path: 'userprofile',
                element: <UserProfile />,
            },
        ],
    },
]);

export default Router;
