import React from 'react';
import { Grid, Cell } from 'react-foundation';
import './style.css';
import GalleryCell from './GalleryCell';
import { useQuery } from '@apollo/client';
import { QUERY_PLAYLIST } from '../../utils/queries.js'


const Homepage = () => {
  const { loading, error, data } = useQuery(QUERY_PLAYLIST);
  const playlistdata = data?.playlists || [];

  return (
    <div>
      <Grid className="grid">
        {playlistdata.map((item, index) => (
          <Cell
            key={index}
            className={`grid-item ${item.genre}`}
            data-genre={item.genre}
          >
            <div className="gallery-name">{item.name}</div>
            <img
              src={`../../images/${item.genre}.jpg`}
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


