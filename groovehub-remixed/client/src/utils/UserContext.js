import { createContext } from 'react';

const UserContext = createContext({
    loggedIn: false,
    username: null,
    _id: null,
    setLoggedIn: () => undefined,
    setUsername: () => undefined,
    setUserId: () => undefined,
});

export default UserContext;
