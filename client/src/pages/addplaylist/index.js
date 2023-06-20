import React, { useState } from 'react';
import axios from 'axios';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { ADD_FAVORITE_PLAYLIST } from '../../utils/mutations';
import './style.css';
import GetMyPlaylists from '../myplaylist/GetMyPlaylist';

const AddPlaylist = () => {
    const Navigate = useNavigate();
    const [name, setName] = useState('');
    const [spotifyPlaylistID, setSpotifyPlaylistID] = useState('');
    const [addFavoritePlaylist] = useMutation(ADD_FAVORITE_PLAYLIST);
    const [search, setSearch] = useState('');
    const [playlists, setPlaylists] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        const accessToken = localStorage.getItem('token');
        const response = await axios.get(`https://api.spotify.com/v1/search?q=${search}&type=playlist`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        setPlaylists(response.data.playlists.items);
    }

    const handleSavePlaylist = async (playlist) => {
        try {
            // Fetch the playlist image from Spotify
            const playlistImageUrl = playlist.images[0]?.url || '';

            // Call the mutation to save the playlist to the database
            await addFavoritePlaylist({
                variables: {
                    name: playlist.name,
                    spotifyPlaylistID: playlist.id,
                    imgUrl: playlistImageUrl, // Pass the image url to the mutation
                },
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
            <h1>Search Spotify Playlists</h1>
            <form onSubmit={handleSearch}>
                <input
                    className="edit-input"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search for Spotify Playlists"
                />
                <button type="submit">Search</button>
            </form>

            <div className="playlists-container">
                {playlists.map((playlist) => (
                    <div key={playlist.id} className="playlist-item">
                        <h3>{playlist.name}</h3>
                        <img className="playlist-image" src={playlist.images[0]?.url || ''} alt={playlist.name}/>
                        <button onClick={() => handleSavePlaylist(playlist)}>Add Playlist</button>
                    </div>
                ))}
            </div>

            <h1>Import From Your Spotify Playlist Library</h1>
            <GetMyPlaylists />

        </div>
    );
};

export default AddPlaylist;
