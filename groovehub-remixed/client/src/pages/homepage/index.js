import React from 'react';
import { Grid, Cell } from 'react-foundation';
import './style.css';

const Homepage = () => {

  // this is the onclick function that takes you to the playlist view
  function viewPlaylist() {

    window.location.href = 'http://localhost:3000/viewplaylist';
}

  return (
    <div>
      <Grid className="grid">
        <Cell className="grid-item anime" data-genre="Anime">
          <div className="gallery-name"></div>
        </Cell>
        <Cell className="grid-item classical" data-genre="Classical">
          <div className="gallery-name"></div>
        </Cell>
        <Cell className="grid-item country" data-genre="country" onClick={viewPlaylist}>
          <div className="gallery-name"></div>
        </Cell>
        <Cell className="grid-item disney" data-genre="Disney">
          <div className="gallery-name"></div>
        </Cell>
        <Cell className="grid-item electronic" data-genre="Electronic">
          <div className="gallery-name"></div>
        </Cell>
        <Cell className="grid-item hiphop" data-genre="Hip-Hop">
          <div className="gallery-name"></div>
        </Cell>
        <Cell className="grid-item jazz" data-genre="Jazz">
          <div className="gallery-name"></div>
        </Cell>
        <Cell className="grid-item korean" data-genre="Korean">
          <div className="gallery-name"></div>
        </Cell>
        <Cell className="grid-item rock" data-genre="Rock">
          <div className="gallery-name"></div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Homepage;
