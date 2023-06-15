import React from 'react';
import { Grid, Cell } from 'react-foundation';
import './style.css';
import { useQuery } from '@apollo/client';
import { QUERY_PLAYLIST } from '../../utils/queries.js'

function viewPlaylist() {

  window.location.href = 'http://localhost:3000/viewplaylist';

};

const Homepage = () => {
  const { loading, error, data } = useQuery(QUERY_PLAYLIST);
  const playlistdata = data?.playlists || [];

console.log(playlistdata)

  return (
    <div>
      <Grid className="grid">
        {playlistdata.map((item, index) => (
          <Cell
            onClick={() => viewPlaylist(item.spotifyPlaylistID, item.genre)}
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


