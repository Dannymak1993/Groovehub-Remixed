import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//This gets the token from the authorization process and saves it local storage after hashing it.

const Callback = () => {
    const navigate = useNavigate();

    const [token, setToken] = useState('');
    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
    
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
    
            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
    
        setToken(token)

        navigate('/');

        console.log(token);
    
    }, [navigate])

   
    
}; 
export default Callback;

//This process then leads you to the homepage at "/". 