import React from 'react';
import './style.css';
import Button from '@mui/material/Button';
import Login from '../login/Login';
import Signup from '../signup/Signup';


export const Authentication = () => {
    function handleLogin() {
        window.location.href = 'http://localhost:3000/spotifyAuth';
    }

    return (
        <div className ="login-container">
            <h1>Welcome!</h1>
            {/* <Button class="auth-btn" variant="contained" color="primary" onClick={handleLogin}>
                Begin Spotify Authentication
            </Button> */}

            <Signup />
            <Login />
        </div>
    );
}
