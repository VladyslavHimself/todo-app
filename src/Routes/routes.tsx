import React from 'react';
import Auth from '../Pages/Auth';
import NotFound from '../Pages/404';
import Todo from '../Pages/Todo';

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
        element: <Auth />,
    },

    {
        path: '/todo',
        exact: true,
        element: <Todo />,
    },
];

export default routes;
