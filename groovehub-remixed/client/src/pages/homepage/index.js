import React from 'react';
import { Grid, Cell } from 'react-foundation';
import './style.css';

import GalleryCell from './GalleryCell';


//this is the data for the GalleryCell's

const country = {
  dataGenre: 'country',
  className: 'grid-item country',
  // className: 'gallery-name Country'
  // playlistId: 'fhecbdcdg'
}

const classical = {
  dataGenre: 'classical',
  className: 'grid-item classical',
  name: 'Classical'
}
const hiphop = {
  dataGenre: 'hiphop',
  className: 'grid-item hiphop',
  name: 'Hiphop'
}
const electronic = {
  dataGenre: 'electronic',
  className: 'grid-item electronic',
  name: 'Electronic'
}
const anime = {
  dataGenre: 'anime',
  className: 'grid-item anime',
  name: 'Anime'
}
const disney = {
  dataGenre: 'disney',
  className: 'grid-item disney',
  name: 'Disney'
}
const rock = {
  dataGenre: 'rock',
  className: 'grid-item rock',
  name: 'Rock'
}
const jazz = {
  dataGenre: 'jazz',
  className: 'grid-item jazz',
  name: 'Jazz'
}
const korean = {
  dataGenre: 'korean',
  className: 'grid-item korean',
  name: 'K-Pop'
}

//this generates the homepage gallery
const Homepage = () => {

  return (
    <div>
      <Grid className="grid">
        <GalleryCell className={country.className} data-genre={country.dataGenre} />
        <GalleryCell className={classical.className} data-genre={classical.dataGenre} />
        <GalleryCell className={rock.className} data-genre={rock.dataGenre} />
        <GalleryCell className={korean.className} data-genre={korean.dataGenre} />
        <GalleryCell className={jazz.className} data-genre={jazz.dataGenre} />
        <GalleryCell className={hiphop.className} data-genre={hiphop.dataGenre} />
        <GalleryCell className={electronic.className} data-genre={electronic.dataGenre} />
        <GalleryCell className={disney.className} data-genre={disney.dataGenre} />
        <GalleryCell className={anime.className} data-genre={anime.dataGenre} />
      </Grid>
    </div>
  );

};

export default Homepage;

