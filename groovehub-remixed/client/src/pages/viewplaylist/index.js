import React, { useEffect, useState } from 'react';
import axios from 'axios';

//this uses the token from authentication and runs an api call to a specific genre and brings in a playlist id and playlist name to render it into the iframe
const ViewPlaylist = () => {

    const [playlists, setPlaylist] = useState();


    useEffect(() => {
        const fetchPlaylist = async () => {
            try {
                const accessToken = localStorage.getItem('token');

                // console.log(accessToken);

                const response = await axios.get('https://api.spotify.com/v1/browse/categories/country/playlists?country=US&limit=1', {
                  headers: {
                    Authorization: `Bearer ${accessToken}`,
                  },
                });
        
                setPlaylist(response.data);
                const playlistName= playlists.playlists.items[0].name;
                const playlistId= playlists.playlists.items[0].id;
    console.log(playlistName);
    console.log(playlistId);

                // console.log(response.data);


            } catch (err) {
                console.error('Error fetching playlist:', err);
        // Handle error
            }
        };
        fetchPlaylist();
    }, []);
    
    return (

        <div> {playlists ? (
        <div className="view-playlist">
            <h1>{playlists.playlists.items[0].name}</h1>
            <p>{playlists.description}</p>
            <iframe
                style={{ borderRadius: '12px' }}
                src={`https://open.spotify.com/embed/playlist/${playlists.playlists.items[0].id}?utm_source=generator`}
                width="600px"
                height="600px"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Playlist"
            ></iframe>
        </div>
        ) : (
            <div>Loading playlist...</div>
        )}
        </div>
    );
};
export default ViewPlaylist;
