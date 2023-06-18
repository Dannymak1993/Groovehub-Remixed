import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios'
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { ADD_USER_PLAYLIST } from '../../utils/mutations';

//this component calls the api and then returns the data
const GetMyPlaylists = () => {
  const Navigate = useNavigate()
  const [playlists, setPlaylist] = useState();
  const [name, setName] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [spotifyPlaylistID, setSpotifyPlaylistID] = useState('');
  const [addUserPlaylist] = useMutation(ADD_USER_PLAYLIST);
  console.log(playlists);

  const handleSavePlaylist = async () => {
    try {
      // Call the mutation to save the playlist to the database
      const { data } = await addUserPlaylist({
        variables: { name, spotifyPlaylistID, imgUrl },
      });

      // Redirect to the MyPlaylist page after saving the playlist
      Navigate('/myplaylist');
      window.location.reload();
    } catch (error) {
      console.error(error, "hey look here");
    }
  };


  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const accessToken = localStorage.getItem('token');

        // console.log(accessToken);

        const response = await axios.get('https://api.spotify.com/v1/me/playlists?limit=50', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log(response.data);
        setPlaylist(response.data.items);





        // console.log(response.data);


      } catch (err) {
        console.error('Error fetching playlist:', err);
        // Handle error
      }
    };
    fetchPlaylist();
  }, []);

  if (!playlists) {
    <GetMyPlaylists />
  } else {
    return (

      <div className="edit-container">
        <select
          className="playlist-select"
          value={spotifyPlaylistID}
          onChange={(e) => {
            const selectedId = e.target.value;
            const selectedName = playlists.find(playlist => playlist.id === selectedId).name;
            const selectedImage = playlists.find(playlist => playlist.id === selectedId).images[0].url;

            console.log("Selected option:", selectedId, selectedName, selectedImage);
            setSpotifyPlaylistID(selectedId);
            setName(selectedName);
            setImgUrl(selectedImage);
          }}
        >
          <option value="">Select a Playlist Name</option>
          {playlists.map((playlist, index) => (
            <option key={index} value={playlist.id}>
              {playlist.name}
            </option>
          ))}
        </select>
        <button onClick={handleSavePlaylist}>Add Playlist</button>
      </div>
    )
  }
}
export default GetMyPlaylists;

// : {playlist.images[0].url