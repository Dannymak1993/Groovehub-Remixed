import React, {useState, useEffect} from 'react';
import './style.css';
import axios from 'axios'
import { Grid, Cell } from 'react-foundation';

//this component calls the api and then returns the data
const GetMyPlaylists = () => {
const [playlists, setPlaylist] = useState();
console.log(playlists);


useEffect(() => {
    const fetchPlaylist = async () => {
        try {
            const accessToken = localStorage.getItem('token');

            // console.log(accessToken);

            const response = await axios.get('https://api.spotify.com/v1/me/playlists?limit=50', {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            });
            console.log(response.data);
            setPlaylist(response.data.items);
            

            
        

            // console.log(response.data);


        } catch (err) {
            console.error('Error fetching playlist:', err);
    // Handle error
        }
    };
    fetchPlaylist();
}, []); 


return(
    
    <div>
    {playlists ? (
      playlists.map((playlist, index) => (
        <Cell key={index}>
          <h1>{playlist.name}</h1>
          <h2>{playlist.id}</h2>
          <img src={playlist.images[0].url}/>
        </Cell>
      ))
    ) : (
      <p>Loading Playlists...</p>
    )}
  </div>
)

}

export default GetMyPlaylists;