import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
    const [profile, setProfile] = useState(null);
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const accessToken = localStorage.getItem('token');
                const response = await axios.get('https://api.spotify.com/v1/playlists/37i9dQZF1DZ06evO1brcxq/tracks', {
                  headers: {
                    Authorization: `Bearer ${accessToken}`,
                  },
                });
                setProfile(response.data);
                console.log(response.data);
            } catch (err) {
                console.error('Error fetching profile:', err);
        // Handle error
            }
        };
        fetchProfile();
    }, []);

    return (
        <div>
        {profile ? (
          <div>
            <h2>{profile.display_name}</h2>
            <p>Email: {profile.email}</p>
            {/* Render additional profile information as desired */}
          </div>
        ) : (
          <div>Loading profile...</div>
        )}
      </div>
    );
};

export default Profile;