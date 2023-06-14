import React, {useEffect} from 'react';

//This starts the authorization process for spotify when the user clicks on the spotify log in button. 

const Auth = () => {

    useEffect(() => {
        const clientId= 'f770e82c1a024fff81d38b74f6863a9e';
        const redirectUri= "http://localhost:3000/callback";
        
        const responseType= 'token';

        //Generating the authorization URL
        const authorizeUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}`;

        window.location.href = authorizeUrl;
    }, []);

    return <div>Redirecting to Spotify login.....</div>;
};

export default Auth;

//This leads to the spotifyCallback.js