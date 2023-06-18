const Playlist = ({ playlistId }) => {
const spotifyPlaylistID = playlistId;
const token = localStorage.getItem('token');

return (
<iframe
    style={{ borderRadius: '12px' }}
    src={`https://open.spotify.com/embed/playlist/${spotifyPlaylistID}?utm_source=generator&amp;user_token=${token}`}
    width="600px"
    height="600px"
    frameBorder="0"
    allowFullScreen
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
    title="Playlist"
></iframe>
)};


export default Playlist;