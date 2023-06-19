import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/homepage/index.js';
import { Authentication } from '../pages/authentication/index.js';
import SpotifyAuth from '../pages/authentication/spotifyAuth.js';
import Callback from '../pages/authentication/spotifyCallback.js';
import ViewPlaylist from '../pages/viewplaylist/index.js';
import MyPlaylist from '../pages/myplaylist/index.js';
import AddPlaylist from '../pages/addplaylist/index.js';
import EditPlaylist from '../pages/editplaylist/index.js';
import Community from '../pages/community/index.js';
import UserAuth from '../utils/auth.js';

const AppRoutes = () => {
    const [playlistInfo, setplaylistInfo] = useState({});
    console.log(playlistInfo)

    if (UserAuth.loggedIn()) {
        console.log('user is logged in!!')
        const profile = UserAuth.getProfile();
        const userId = profile.data._id;
        return (
            <Routes>
                <Route path="/" element={<Homepage playlistInfo={playlistInfo} setplaylistInfo={setplaylistInfo} />} />
                <Route path="/authentication" element={<Authentication />} />
                <Route path="/spotifyAuth" element={<SpotifyAuth />} />
                <Route path="/callback" element={<Callback />} />
                {/* <Route path="/viewplaylist/:playlistId" element={<ViewPlaylist playlistInfo={playlistInfo} setplaylistInfo={setplaylistInfo} />} /> */}
                <Route path="/viewplaylist/:playlistId" element={<ViewPlaylist playlistInfo={playlistInfo} setplaylistInfo={setplaylistInfo} userId={userId}/>} />

                <Route path="/community" element={<Community playlistInfo={playlistInfo} setplaylistInfo={setplaylistInfo} userId={userId}/>} />
                <Route path="/addplaylist" element={<AddPlaylist playlistInfo={playlistInfo} setplaylistInfo={setplaylistInfo} />} />
                <Route path="/editplaylist/:playlistId" element={<EditPlaylist playlistInfo={playlistInfo} setplaylistInfo={setplaylistInfo} />} />
                <Route path="/myplaylist" element={<MyPlaylist playlistInfo={playlistInfo} setplaylistInfo={setplaylistInfo} userId={userId} />} />
            </Routes>
        );
    }
    return (
        <Routes>
                <Route path="/" element={<Homepage playlistInfo={playlistInfo} setplaylistInfo={setplaylistInfo} />} />
                <Route path="/authentication" element={<Authentication />} />
                <Route path="/spotifyAuth" element={<SpotifyAuth />} />
                <Route path="/callback" element={<Callback />} />
                <Route path="*" element={<Authentication />}/>
            </Routes>
    )
};

export default AppRoutes;
