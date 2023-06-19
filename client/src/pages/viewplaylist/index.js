import React from 'react';
import { useParams } from 'react-router-dom';
import LiveChat from '../../components/chat/chat.js'
import Playlist from './playlist.js'
import './style.css';

const ViewPlaylist = ({ playlistInfo, userId }) => { // <=== Add userId here
    const { playlistId } = useParams();
    const genre = playlistInfo.genre;
    return (
        <div className="view-playlist">
        <h1 className="genre">{genre}</h1>
            <div className="center-container">
        <Playlist playlistId={playlistId} />
        <LiveChat playlistId={playlistId} userId={userId} /> {/* <=== Pass userId to LiveChat */}
            </div>
        </div>
    );
};

export default ViewPlaylist;
