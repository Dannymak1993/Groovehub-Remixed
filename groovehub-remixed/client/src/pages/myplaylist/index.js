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
    const [deleteUserPlaylist] = useMutation(DELETE_USER_PLAYLIST);

    const handleCreatePlaylist = () => {
        Navigate('/addplaylist');
    };

    const handlesubmit = (event, spotifyPlaylistID, name, genre) => {
        console.log(event)
        setplaylistInfo({ playlist: spotifyPlaylistID, name: name });
        Navigate('/viewplaylist');
        event.stopPropagation();
    };

    const handleEditPlaylist = (name, spotifyPlaylistID, event) => {
        event.stopPropagation();
        Navigate(`/editplaylist/${spotifyPlaylistID}`);
    };

    const handleDeletePlaylist = async ( name, spotifyPlaylistID, event) => {
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

    return (
        <div>
            <Grid className="grid">

                {userPlaylists.map((playlist, index) => (
                    <Cell
                        key={index}
                        className={`grid-item ${playlist.genre}`}
                        data-genre={playlist.genre}
                        // style={`background:${playlist.imgURL}`}
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
                                // onClick={(event) =>
                                //     handleSharePlaylist(
                                //         playlist.name,
                                //         playlist.spotifyPlaylistID,
                                //         event)}
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
