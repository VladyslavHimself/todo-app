import React from 'react';
import Auth from '../Pages/Auth';
import NotFound from '../Pages/404';
import Todo from '../Pages/Todo';
import Register from '../Pages/Register';

export interface IRoute {
    path: string;
    element: JSX.Element;
    exact?: boolean;
}

export const routes: IRoute[] = [
    {
        path: '/',
        exact: true,
        element: <Auth />,
    },

    {
        path: '*',
        exact: true,
        element: <NotFound />,
    },

    {
        path: '/login',
        exact: true,
        element: <Auth />,
    },

    {
        path: '/register',
        exact: true,
        element: <Register />,
    },

    {
        path: '/todo',
        exact: true,
        element: <Todo />,
    },
];

export default routes;
