import React from 'react';
import { Grid, Cell } from 'react-foundation';
import './style.css';

import GalleryCell from './GalleryCell';

import { useQuery } from '@apollo/client';
import { QUERY_PLAYLIST } from '../../utils/queries.js'

//this is the data for the GalleryCell's

// const country = {
//   dataGenre: 'country',
//   className: 'grid-item country',
//   name: 'Country'
// }
// const classical = {
//   dataGenre: 'classical',
//   className: 'grid-item classical',
//   name: 'Classical'
// }
// const hiphop = {
//   dataGenre: 'hiphop',
//   className: 'grid-item hiphop',
//   name: 'Hiphop'
// }
// const electronic = {
//   dataGenre: 'electronic',
//   className: 'grid-item electronic',
//   name: 'Electronic'
// }
// const anime = {
//   dataGenre: 'anime',
//   className: 'grid-item anime',
//   name: 'Anime'
// }
// const disney = {
//   dataGenre: 'disney',
//   className: 'grid-item disney',
//   name: 'Disney'
// }
// const rock = {
//   dataGenre: 'rock',
//   className: 'grid-item rock',
//   name: 'Rock'
// }
// const jazz = {
//   dataGenre: 'jazz',
//   className: 'grid-item jazz',
//   name: 'Jazz'
// }
// const korean = {
//   dataGenre: 'korean',
//   className: 'grid-item korean',
//   name: 'K-Pop'
// }

//this generates the homepage gallery

const Homepage = () => {
  const { loading, error, data } = useQuery(QUERY_PLAYLIST);
  const playlistdata = data?.playlists || {};
  if (error) {
    console.log(error)
  }
  console.log(playlistdata)
  console.log(typeof playlistdata);
  return (
    <div>
      <Grid className="grid">
        {playlistdata.map((item, index) => (
          <GalleryCell key={index} data-genre={item.genre} />
        ))}
      </Grid>
    </div>
  );

};

export default Homepage;

