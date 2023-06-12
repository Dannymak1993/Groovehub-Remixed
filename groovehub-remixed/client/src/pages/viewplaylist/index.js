import React from 'react';

const ViewPlaylist = ({ playlist }) => {
    return (
        <div className="view-playlist">
            <h1>{playlist.title}</h1>
            <p>{playlist.description}</p>
            <iframe
                style={{ borderRadius: '12px' }}
                src={`https://open.spotify.com/embed/playlist/${playlist.playlistId}?utm_source=generator`}
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
