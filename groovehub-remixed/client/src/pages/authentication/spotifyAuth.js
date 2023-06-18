import React, {useEffect} from 'react';

//This starts the authorization process for spotify when the user clicks on the spotify log in button. 

const SpotifyAuth = () => {

    useEffect(() => {
        const clientId= 'f770e82c1a024fff81d38b74f6863a9e';
        const redirectUri= "http://localhost:3000/callback";
        
        const responseType= 'code';

        //Generating the authorization URL
        //This includes spootify scopes, which are permissions that the user grants to the app
        const authorizeUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=playlist-read-private`;

        window.location.href = authorizeUrl;
    }, []);

    // return <div>Redirecting to Spotify login.....</div>;
};

export default SpotifyAuth;

//This leads to the spotifyCallback.js