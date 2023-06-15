import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/homepage/index.js';
import Authentication from '../pages/authentication/index.js';
import Auth from '../pages/authentication/spotifyAuth.js';
import Callback from '../pages/authentication/spotifyCallback.js';
import ViewPlaylist from '../pages/viewplaylist/index.js';

const AppRoutes = () => {
    const [playlistInfo, setplaylistInfo] = useState({});
    console.log(playlistInfo)
    return (
        <Routes>
            <Route path="/" element={<Homepage playlistInfo = {playlistInfo} setplaylistInfo = {setplaylistInfo}/>} />
            <Route path="/authentication" element={<Authentication />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/callback" element={<Callback/>} />
            <Route path="/viewplaylist" element={<ViewPlaylist playlistInfo={playlistInfo} setplaylistInfo={setplaylistInfo} />} /> 
            {/* <Route path="/community" element={<Community />} />
            <Route path="/editplaylist" element={<EditPlaylist />} />
            <Route path="/myplaylist" element={<MyPlaylist />} />*/}
            
           
        </Routes>
    );
};

export default AppRoutes;
