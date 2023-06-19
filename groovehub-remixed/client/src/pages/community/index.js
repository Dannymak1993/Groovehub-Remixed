import React from 'react';
import { Grid, Cell } from 'react-foundation';
import './style.css';
import { useQuery, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { QUERY_COMMUNITY_PLAYLIST } from '../../utils/queries.js'
import { DELETE_COMMUNITY_PLAYLIST } from '../../utils/mutations.js'


const Community = ({ setplaylistInfo, userId }) => {  // <=== Add userId here
    const Navigate = useNavigate()
    const { loading, error, data } = useQuery(QUERY_COMMUNITY_PLAYLIST);
    const communityPlaylists = data?.communityPlaylists || [];
    const [deleteCommunityPlaylist] = useMutation(DELETE_COMMUNITY_PLAYLIST);

    const handlesubmit = (event, playlistId, name) => {
        setplaylistInfo({ playlist: playlistId, name: name });
        Navigate(`/viewplaylist/${playlistId}`);
        event.stopPropagation();
    };

    const handleDeletePlaylist = async (name, spotifyPlaylistID, event) => {
        event.stopPropagation();
        try {
            await deleteCommunityPlaylist({
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
                {communityPlaylists.map((playlist, index) => {
                    // moved the console logs here
                    console.log('OVER HERE', playlist,playlist.user)
                    if (playlist.user) {
                        console.log('Playlist User ID:', playlist.user._id);
                        console.log('Current User ID:', userId);
                    }

                    return (
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
                                {playlist.user && userId === playlist.user._id && (
                                    <button
                                        className="delete-button"
                                        onClick={(event) =>
                                            handleDeletePlaylist(
                                                playlist.name,
                                                playlist.spotifyPlaylistID,
                                                event
                                            )}
                                    >
                                        Delete
                                    </button>
                                )}
                                <div className="gallery-name">{playlist.name}</div>
                            </div>
                        </Cell>
                    );
                })}
            </Grid>
        </div>
    );
};

export default Community;
