import React from 'react';
import LiveChat from '../../components/chat/chat.js'
import Playlist from './playlist.js'

const ViewPlaylist = ({ playlistInfo }) => {
    const genre = playlistInfo.genre;
    return (
        <div className="view-playlist">
        <h1>{genre}</h1>
        <Playlist playlistInfo={playlistInfo} />
        <LiveChat chatName = "anime" />

        </div>
    );
};

export default ViewPlaylist;