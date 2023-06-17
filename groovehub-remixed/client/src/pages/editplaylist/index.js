import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { UPDATE_USER_PLAYLIST } from '../../utils/mutations';
import './style.css';

const EditPlaylist = () => {
    const { playlistId } = useParams();
    const navigate = useNavigate();

    const [newPlaylistName, setNewPlaylistName] = useState('');

    const handlePlaylistNameChange = (event) => {
        setNewPlaylistName(event.target.value);
    };

    const [updateUserPlaylist] = useMutation(UPDATE_USER_PLAYLIST);

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log('Playlist ID:', playlistId);
        console.log('New Playlist Name:', newPlaylistName);
        
        try {
            await updateUserPlaylist({
                variables: {
                    spotifyPlaylistID: playlistId,
                    name: newPlaylistName,
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
            <form onSubmit={handleSubmit}>
                <label>
                    New Playlist Name:
                    <input
                        type="text"
                        value={newPlaylistName}
                        onChange={handlePlaylistNameChange}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default EditPlaylist;
