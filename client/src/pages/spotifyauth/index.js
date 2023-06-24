// import React from 'react';
import './style.css';
import Button from '@mui/material/Button';
import React, { useEffect } from 'react';

export const SpotifyAuthentication = () => {
    function handleLogin() {
        window.location.href = 'http://localhost:3000/spotifyAuth';
    }

    return (
        <div className="login-container">
            <h1>Welcome!</h1>
            <Button className="auth-btn" variant="contained" color="primary" onClick={handleLogin}>
                Begin Spotify Authentication
            </Button>

        </div>
    );
}

const SpotifyAuth = () => {

    console.log('outside the hook')
    useEffect(() => {

        const clientId = 'f770e82c1a024fff81d38b74f6863a9e';
        const redirectUri = "https://groovehub-remixed-2f12da1632a2.herokuapp.com/callback";

        const responseType = 'token';

        //Generating the authorization URL
        const authorizeUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=playlist-read-private`;

        window.location.href = authorizeUrl;

    }, []);

    // return <div>Redirecting to Spotify login.....</div>;
};