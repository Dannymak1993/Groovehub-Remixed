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
            <h1 className="login-header">Welcome!</h1>
            <Signup />
            <Login />
        </div>
    );
}
