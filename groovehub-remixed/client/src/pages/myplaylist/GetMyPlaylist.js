import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios'
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { ADD_FAVORITE_PLAYLIST } from '../../utils/mutations'; 

const GetMyPlaylists = () => {
  const Navigate = useNavigate()
  const [playlists, setPlaylist] = useState();
  const [name, setName] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [spotifyPlaylistID, setSpotifyPlaylistID] = useState('');
  const [addFavoritePlaylist] = useMutation(ADD_FAVORITE_PLAYLIST);

  const handleSavePlaylist = async () => {
    try {
      const { data } = await addFavoritePlaylist({
        variables: { name, spotifyPlaylistID, imgUrl },
      });

      Navigate('/myplaylist');
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const accessToken = localStorage.getItem('token');
        const response = await axios.get('https://api.spotify.com/v1/me/playlists?limit=50', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setPlaylist(response.data.items);
      } catch (err) {
        console.error('Error fetching playlist:', err);
      }
    };
    fetchPlaylist();
  }, []);

  if (!playlists) {
    return <div>Loading playlists...</div>;
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
