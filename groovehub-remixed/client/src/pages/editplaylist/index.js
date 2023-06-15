import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { ADD_USER_PLAYLIST } from '../../utils/mutations';

const EditPlaylist = () => {

    const Navigate = useNavigate()
    const [name, setName] = useState('');
    const [spotifyPlaylistID, setSpotifyPlaylistID] = useState('');
    const [addUserPlaylist] = useMutation(ADD_USER_PLAYLIST);

    const handleSavePlaylist = async () => {
        try {
            // Call the mutation to save the playlist to the database
            await addUserPlaylist({
                variables: { name, spotifyPlaylistID },
            });

            // Redirect to the MyPlaylist page after saving the playlist
            Navigate('/myplaylist');
        } catch (error) {
            console.error(error, "hey look here");
        }
    };

    return (
        <div>
            <h1>Edit Playlist</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Playlist Name"
            />
            <input
                type="text"
                value={spotifyPlaylistID}
                onChange={(e) => setSpotifyPlaylistID(e.target.value)}
                placeholder="Enter Spotify Playlist ID"
            />
            <button onClick={handleSavePlaylist}>Add Playlist</button>
        </div>
    );
};

export default EditPlaylist;
