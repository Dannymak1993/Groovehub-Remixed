import React from 'react';
import Button from '@mui/material/Button';

//this is where the user lands to log into spotify and start the authentication process when the button is clicked the user is taken to the "/login" which initializes the spotifyAuth.js and they end up at "/" after the process is finished. 

export default function authentication() {
    return (
        <div>
            <h1>Welcome to GrooveHub Remixed</h1>
            <Button variant="contained" color="primary" onClick={handleLogin}>
                Begin Spotify Authentication
            </Button>
        </div>
    );

    function handleLogin() {
        // Redirect to backend's OAuth 2.0 endpoint
        window.location.href = 'http://localhost:3000/login';
    }
}