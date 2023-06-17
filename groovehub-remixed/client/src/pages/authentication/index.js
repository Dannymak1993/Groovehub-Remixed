// import React, { useState } from 'react'; 
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../../utils/mutations';
import React from 'react';
import './style.css';
import Button from '@mui/material/Button';
import Login from '../login/Login';
import Signup from '../signup/Signup';
// import UserAuth from '../../utils/auth';


// export const Login = (props) => {
//     const [formState, setFormState] = useState({ email: '', password: '' });
//     const [login, { error, data }] = useMutation(LOGIN_USER);

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormState({
//             ...formState,
//             [name]: value,
//         });
//     };

//     const handleFormSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const { data } = await login({
//                 variables: { ...formState },
//             });
//             UserAuth.login(data.login.token);
//         } catch (e) {
//             console.error(e);
//         }
//         setFormState({
//             email: '',
//             password: '',
//         });
//     };

//     return (
//         <main className="flex-row justify-center mb-4">
//             <div className="col-12 col-lg-10">
//                 <div className="card">
//                     <h4 className="card-header bg-dark text-light p-2">Login</h4>
//                     <div className="card-body">
//                         {data ? (
//                             <p>
//                                 Success! You may now head{' '}
//                                 <Link to="/">back to the homepage.</Link>
//                             </p>
//                         ) : (
//                             <form onSubmit={handleFormSubmit}>
//                                 <input
//                                     className="form-input"
//                                     placeholder="Your email"
//                                     name="email"
//                                     type="email"
//                                     value={formState.email}
//                                     onChange={handleChange}
//                                 />
//                                 <input
//                                     className="form-input"
//                                     placeholder="******"
//                                     name="password"
//                                     type="password"
//                                     value={formState.password}
//                                     onChange={handleChange}
//                                 />
//                                 <button
//                                     className="btn btn-block btn-primary"
//                                     style={{ cursor: 'pointer' }}
//                                     type="submit"
//                                 >
//                                     Submit
//                                 </button>
//                             </form>
//                         )}

//                         {error && (
//                             <div className="my-3 p-3 bg-danger text-white">
//                                 {error.message}
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// };

export const Authentication = () => {
    function handleLogin() {
        window.location.href = 'http://localhost:3000/spotifyAuth';
    }

    return (
        <div className ="login-container">
            <h1>Welcome!</h1>
            <Button class="auth-btn" variant="contained" color="primary" onClick={handleLogin}>
                Begin Spotify Authentication
            </Button>

            <Signup />
            <Login />
        </div>
    );
}
