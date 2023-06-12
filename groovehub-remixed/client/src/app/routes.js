import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard/index.js';
import Authentication from '../pages/authentication/index.js';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/authentication" element={<Authentication />} />
            {/* <Route path="/community" element={<Community />} />
            <Route path="/editplaylist" element={<EditPlaylist />} />
            <Route path="/myplaylist" element={<MyPlaylist />} />
            <Route path="/viewplaylist" element={<ViewPlaylist />} /> */}
        </Routes>
    );
};

export default AppRoutes;
