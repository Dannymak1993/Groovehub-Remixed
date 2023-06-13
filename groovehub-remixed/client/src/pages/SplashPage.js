import React from 'react';
import Button from '@mui/material/Button';

export default function SplashPage() {
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