import React from 'react';
import LiveChat from '../../components/chat/chat.js'
import Playlist from './playlist.js'
import './style.css';

const ViewPlaylist = ({ playlistInfo }) => {
    const genre = playlistInfo.genre;
    return (
        <div className="view-playlist">
        <h1 className="genre">{genre}</h1>
            <div className="center-container">
        <Playlist playlistInfo={playlistInfo} />
        <LiveChat chatName = "anime" />
            </div>
        </div>
    );
};

export default ViewPlaylist;