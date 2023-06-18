import React from 'react';
import { Grid, Cell } from 'react-foundation';
import './style.css';
import { useQuery, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { QUERY_USER_PLAYLIST } from '../../utils/queries.js';
import { DELETE_USER_PLAYLIST, ADD_COMMUNITY_PLAYLIST } from '../../utils/mutations.js'

const MyPlaylist = ({ setplaylistInfo }) => {
    const Navigate = useNavigate();
    const { loading, error, data } = useQuery(QUERY_USER_PLAYLIST);
    const userPlaylists = data?.userPlaylists || [];
    const [deleteUserPlaylist] = useMutation(DELETE_USER_PLAYLIST);
    const [addCommunityPlaylist] = useMutation(ADD_COMMUNITY_PLAYLIST);

    const handleCreatePlaylist = () => {
        Navigate('/addplaylist');
    };

    const handlesubmit = (event, playlistId, name) => {
        console.log(event)

        setplaylistInfo({ playlist: playlistId, name: name });
        Navigate(`/viewplaylist/${playlistId}`);
        event.stopPropagation();
    };

    const handleEditPlaylist = (name, spotifyPlaylistID, event) => {
        event.stopPropagation();
        Navigate(`/editplaylist/${spotifyPlaylistID}`);
    };

    const handleDeletePlaylist = async (name, spotifyPlaylistID, event) => {
        event.stopPropagation();
        console.log(name, spotifyPlaylistID)
        try {
            await deleteUserPlaylist({
                variables: { name: name, spotifyPlaylistId: spotifyPlaylistID },
            });
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    const handleSharePlaylist = async (name, spotifyPlaylistID, imgUrl, event) => {
        event.stopPropagation();
        try {
            await addCommunityPlaylist({
                variables: { name: name, spotifyPlaylistId: spotifyPlaylistID, imgUrl: imgUrl },
            });
            // Optionally, you can perform additional actions after saving to the community database
            console.log('Playlist shared successfully!');
            Navigate(`/community`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <Grid className="grid">

                {userPlaylists.map((playlist, index) => (
                    <Cell
                        key={index}
                        className={`grid-item ${playlist.genre}`}
                        data-genre={playlist.genre}
                        style={{ 
                            backgroundImage: `url(${playlist.imgUrl})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                        onClick={(event) =>
                            handlesubmit(
                                event,
                                playlist.spotifyPlaylistID,
                                playlist.name,
                                playlist.genre
                            )
                        }
                    >
                        <div className="gallery-content">
                            <button
                                className="edit-button"
                                onClick={(event) =>
                                    handleEditPlaylist(
                                        playlist.name,
                                        playlist.spotifyPlaylistID,
                                        event)}
                            >
                                Edit
                            </button>
                            <button
                                className="delete-button"
                                onClick={(event) =>
                                    handleDeletePlaylist(
                                        playlist.name,
                                        playlist.spotifyPlaylistID,
                                        event)}
                            >
                                Delete
                            </button>
                            <button
                                className="share-button"
                                onClick={(event) =>
                                    handleSharePlaylist(
                                        playlist.name,
                                        playlist.spotifyPlaylistID,
                                        playlist.imgUrl,
                                        event)}
                            >
                                Share
                            </button>
                            <div className="gallery-name">{playlist.name}</div>
                        </div>
                    </Cell>
                ))}
                <Cell
                    className="grid-item create-cell"
                    onClick={handleCreatePlaylist}
                    style={{
                        backgroundImage: 'url(/images/Cell.gif)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="create-content">
                        <span className="plus-sign">+</span>
                    </div>
                </Cell>
            </Grid>
        </div>
    );
};

export default MyPlaylist;
