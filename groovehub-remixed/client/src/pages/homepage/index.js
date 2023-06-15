import React from 'react';
import { Grid, Cell } from 'react-foundation';
import './style.css';
import { useQuery } from '@apollo/client';
import { QUERY_PLAYLIST } from '../../utils/queries.js'
import { useNavigate } from 'react-router-dom';


const Homepage = ({setplaylistInfo}) => {
  const Navigate = useNavigate ()
  const { loading, error, data } = useQuery(QUERY_PLAYLIST);
  const playlistdata = data?.playlists || [];

  const handlesubmit = (playlist, genre) => {
    setplaylistInfo({ playlist: playlist, genre: genre })
    Navigate('/viewplaylist')
  }
  return (
    <div>
      <Grid className="grid">
        {playlistdata.map((item, index) => (
          <Cell
            onClick={() => handlesubmit(item.spotifyPlaylistID,item.genre)}
            key={index}
            className={`grid-item ${item.genre}`}
            data-genre={item.genre}
          >
            <div className="gallery-name">{item.name}</div>
            <img
              src={`/images/${item.genre}.jpg`}
              alt={item.name}
              className="gallery-image"
            />
          </Cell>
        ))}
      </Grid>
    </div>
  );
};

export default Homepage;