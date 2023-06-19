import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { ADD_FAVORITE_PLAYLIST } from '../../utils/mutations';
import './style.css';
import GetMyPlaylists from '../myplaylist/GetMyPlaylist';

const AddPlaylist = () => {

    const Navigate = useNavigate()
    const [name, setName] = useState('');
    const [spotifyPlaylistID, setSpotifyPlaylistID] = useState('');
    const [addFavoritePlaylist] = useMutation(ADD_FAVORITE_PLAYLIST);

    const handleSavePlaylist = async () => {
        try {
            // Call the mutation to save the playlist to the database
            await addFavoritePlaylist({
                variables: { name, spotifyPlaylistID },
            });

            Navigate('/myplaylist');
            window.location.reload();
            // Redirect to the MyPlaylist page after saving the playlist

        } catch (error) {
            console.error(error, "hey look here");
        }
    };

    return (
        <div className="edit-container">
            <h1>Import your playlist with its ID</h1>
            <input
                className="edit-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Playlist Name"
            />
            <input
                className="edit-input"
                type="text"
                value={spotifyPlaylistID}
                onChange={(e) => setSpotifyPlaylistID(e.target.value)}
                placeholder="Enter Spotify Playlist ID"
            />
            <button onClick={handleSavePlaylist}>Add Playlist</button>


            <h1>Import From Your Spotify Playlist Library</h1>
            <GetMyPlaylists />

        </div>
    );
};

export default AddPlaylist;