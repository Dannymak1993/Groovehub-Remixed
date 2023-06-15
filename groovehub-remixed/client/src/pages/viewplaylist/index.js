import React from 'react';


const ViewPlaylist = ({ props }) => {
    const spotifyPlaylistID = localStorage.getItem('spotifyPlaylistID');
    const genre = localStorage.getItem('genre');
    console.log('spotifyPlaylistID:', spotifyPlaylistID);
    console.log('genre:', genre);
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