import React, { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { UPDATE_FAVORITE_PLAYLIST_NAME } from '../../utils/mutations';
import './style.css';

const EditPlaylist = () => {
    const { playlistId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const [newPlaylistName, setNewPlaylistName] = useState('');

    // Get the imageUrl from the state
    const imageUrl = location.state?.imageUrl;

    const handlePlaylistNameChange = (event) => {
        setNewPlaylistName(event.target.value);
    };

    const [updateFavoritePlaylistName] = useMutation(UPDATE_FAVORITE_PLAYLIST_NAME);

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log('Playlist ID:', playlistId);
        console.log('New Playlist Name:', newPlaylistName);
        
        try {
            await updateFavoritePlaylistName({
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

            {/* Display the image if it's available */}
            {imageUrl && (
                <div>
                    <img src={imageUrl} alt="Playlist" />
                </div>
            )}
        </div>
    );
};

export default EditPlaylist;
