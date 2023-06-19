import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { UPDATE_FAVORITE_PLAYLIST_NAME } from '../../utils/mutations';
import './style.css';

const EditPlaylist = () => {
    const { playlistId } = useParams();
    const navigate = useNavigate();

    const [newPlaylistName, setNewPlaylistName] = useState('');

    const handlePlaylistNameChange = (event) => {
        setNewPlaylistName(event.target.value);
    };

    const [updateFavoritePlaylistName] = useMutation(UPDATE_FAVORITE_PLAYLIST_NAME); // change the mutation here

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log('Playlist ID:', playlistId);
        console.log('New Playlist Name:', newPlaylistName);
        
        try {
            await updateFavoritePlaylistName({ // use the new mutation function here
                variables: {
                    spotifyPlaylistID: playlistId,
                    newName: newPlaylistName,
                },
            });

            setNewPlaylistName('');
            navigate('/myplaylist');
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="edit-playlist-container">
            <form className="edit-form" onSubmit={handleSubmit}>
                <label>
                    New Playlist Name:
                    <input
                        type="text"
                        value={newPlaylistName}
                        onChange={handlePlaylistNameChange}
                        placeholder="type new name here"
                    />
                </label>
                <button className="btn" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default EditPlaylist;
