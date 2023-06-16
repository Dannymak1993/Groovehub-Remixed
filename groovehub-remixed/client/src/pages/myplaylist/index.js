import React from 'react';
import { Grid, Cell } from 'react-foundation';
import './style.css';
import { useQuery, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { QUERY_USER_PLAYLIST } from '../../utils/queries.js';
import { DELETE_USER_PLAYLIST } from '../../utils/mutations.js'
import GetMyPlaylist from './GetMyPlaylist';


const MyPlaylist = ({ setplaylistInfo }) => {
        
    const Navigate = useNavigate();
    const { loading, error, data } = useQuery(QUERY_USER_PLAYLIST);
    const userPlaylists = data?.userPlaylists || [];
    // const [deleteUserPlaylist] = useMutation(DELETE_USER_PLAYLIST);

    const handleCreatePlaylist = () => {
        Navigate('/editplaylist');
    };

    const handlesubmit = (spotifyPlaylistID, name, genre) => {
        setplaylistInfo({ playlist: spotifyPlaylistID, name: name });
        Navigate('/viewplaylist');
    };


    const handleEditPlaylist = (playlistId) => {
        Navigate(`/editplaylist/${playlistId}`);
    };

    // const handleDeletePlaylist = async (playlistId) => {
    //     try {
    //         await deleteUserPlaylist({
    //             variables: { playlistId },
    //             refetchQueries: [{ query: QUERY_USER_PLAYLIST }]
    //         });
    //         // Perform any additional actions after deletion if needed
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    return (
        <div>
            <Grid className="grid">

                


                {userPlaylists.map((playlist, index) => (
                    <Cell
                        key={index}
                        className={`grid-item ${playlist.genre}`}
                        data-genre={playlist.genre}
                        onClick={() =>
                            handlesubmit(
                                playlist.spotifyPlaylistID,
                                playlist.name,
                                playlist.genre
                            )
                        }
                    >
                        <div className="gallery-content">
                            <button
                                className="edit-button"
                                onClick={() => handleEditPlaylist(playlist._id)}
                            >
                                Edit
                            </button>
                            <button
                                className="delete-button"
                                // onClick={() => handleDeletePlaylist(playlist._id)}
                            >
                                Delete
                            </button>
                            <div className="gallery-name">{playlist.name}</div>
                        </div>
                    </Cell>
                ))}
                <Cell
                    className="grid-item create-cell"
                    onClick={handleCreatePlaylist}
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
