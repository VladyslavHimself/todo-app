import React from 'react';

import Auth from '../Pages/Auth';
import { Route } from 'react-router-dom';

const routes = [
    <Route path="/auth" element={<Auth />} strict key="auth" />,
    <Route path="/login" element={<Auth />} strict key="login" />,
    <Route
        path="/register"
        element={<h1>register page</h1>}
        strict
        key="register"
    />,
];

export default routes;
