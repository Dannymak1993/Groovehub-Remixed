import React from 'react';
import {Cell} from 'react-foundation';

//this send the 
// this is the onclick function that takes you to the playlist view

export default function GalleryCell(props) {

  function viewPlaylist() {

    window.location.href = 'http://localhost:3000/viewplaylist';
  
  };
    return (
        <Cell className={props.className} data-genre={props.dataGenre} onClick={viewPlaylist}>
          <div className="gallery-name"></div>
        </Cell>
    )
}