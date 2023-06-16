import React from 'react';
import LiveChat from '../../components/chat/chat.js'

const ViewPlaylist = ({ playlistInfo }) => {
    const spotifyPlaylistID = playlistInfo.playlist;
    const genre = playlistInfo.genre;
    // console.log(playlistInfo);
    // console.log('genre:', genre);
    return (
        <div className="view-playlist">
            <h1>{genre}</h1>
            <iframe
                style={{ borderRadius: '12px' }}
                src={`https://open.spotify.com/embed/playlist/${spotifyPlaylistID}?utm_source=generator`}
                width="600px"
                height="600px"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Playlist"
            ></iframe>

        <LiveChat chatName = "anime" />

        </div>
    );
};

export default ViewPlaylist;