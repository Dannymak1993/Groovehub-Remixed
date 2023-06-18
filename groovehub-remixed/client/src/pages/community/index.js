import React from 'react';
import { Grid, Cell } from 'react-foundation';
import './style.css';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { QUERY_COMMUNITY_PLAYLIST } from '../../utils/queries.js'


const Community = ({ setplaylistInfo }) => {
    const Navigate = useNavigate()
    const { loading, error, data } = useQuery(QUERY_COMMUNITY_PLAYLIST);
    const playlistdata = data?.communityPlaylists || [];

    const handlesubmit = (playlistId, name) => {
        setplaylistInfo({ playlist: playlistId, name: name });
        Navigate(`/viewplaylist/${playlistId}`);
    };
    return (
        <div>
            <Grid className="grid">
                {playlistdata.map((item, index) => (
                    <Cell
                        onClick={() => handlesubmit(item.spotifyPlaylistID, item.name)}
                        key={index}
                        className={`grid-item ${item.name}`}
                        data-genre={item.name}
                    >
                        <div className="gallery-name">{item.name}</div>
                        {/* <img
                            src={`/images/${item.genre}.jpg`}
                            alt={item.name}
                            className="gallery-image"
                        /> */}
                    </Cell>
                ))}
            </Grid>
        </div>
    );
};

export default Community;