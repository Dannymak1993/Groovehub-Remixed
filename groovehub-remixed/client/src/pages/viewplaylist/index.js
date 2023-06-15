import React from 'react';
// import axios from 'axios';

//this uses the token from authentication and runs an api call to a specific genre and brings in a playlist id and playlist name to render it into the iframe
const ViewPlaylist = ({ spotifyPlaylistID, genre }) => {
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
        </div>
    );
};

export default ViewPlaylist;
