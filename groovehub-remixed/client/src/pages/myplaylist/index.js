import React from 'react';
import { Grid, Cell } from 'react-foundation';
import './style.css';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { QUERY_USER_PLAYLIST } from '../../utils/queries.js';
import GetMyPlaylist from './GetMyPlaylist';

const MyPlaylist = ({ setplaylistInfo }) => {
        
    const Navigate = useNavigate();
    const { loading, error, data } = useQuery(QUERY_USER_PLAYLIST);
    const userPlaylists = data?.userPlaylists || [];

    const handlesubmit = (spotifyPlaylistID, name, genre) => {
        setplaylistInfo({ playlist: spotifyPlaylistID, name: name });
        Navigate('/viewplaylist');
    };
//this is using the GetMyPlaylist component that calls the api and renders the list of playlists.
    return (
        <div>
{/* <button onClick={<}>Get My Playlists</button> */}
            {/* <GetMyPlaylist/> */}
            <Grid className="grid">
                
                {userPlaylists.map((playlist, index) => (
                    <Cell
                        onClick={() => handlesubmit(playlist.spotifyPlaylistID, playlist.name, playlist.genre)}
                        key={index}
                        className={`grid-item ${playlist.genre}`}
                        data-genre={playlist.genre}
                    >
                        <div className="gallery-name">{playlist.name}</div>
                    </Cell>
                ))}
            </Grid>
        </div>
    );
};

export default MyPlaylist;
