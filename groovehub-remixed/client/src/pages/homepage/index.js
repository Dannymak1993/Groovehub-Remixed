import React from 'react';
import { Grid, Cell } from 'react-foundation';
import './style.css';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { QUERY_FEATURED_PLAYLIST } from '../../utils/queries.js'


const Homepage = ({setplaylistInfo}) => {
  const Navigate = useNavigate ()
  const { loading, error, data } = useQuery(QUERY_FEATURED_PLAYLIST);
  const playlistdata = data?.featuredPlaylists || [];

  //changes the state of setplaylistinfo and passes in playlist/genre

  const handlesubmit = (playlistId, genre) => {
    setplaylistInfo({ playlist: playlistId, genre: genre });
    Navigate(`/viewplaylist/${playlistId}`);
  };
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