import React, { useState } from 'react';
import './App.css';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import AppRoutes from './routes';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import UserContext from '../utils/UserContext';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` heade
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  console.log('This is the step where apollo grabs the token from the from local storage', token);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);
  const [_id, setUserId] = useState(null);

  return (
    <UserContext.Provider value={{ loggedIn, setLoggedIn, username, setUsername, _id, setUserId }}>
      <ApolloProvider client={client}>
        <div className="App">
          <Header className="header" />
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="content">
            <AppRoutes />
          </div>
        </div>
      </ApolloProvider>
    </UserContext.Provider>
  );
}

export default App;
