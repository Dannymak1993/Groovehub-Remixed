import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER_PLAYLIST = gql`
mutation AddUserPlaylist($name: String!, $spotifyPlaylistID: String!) {
  addUserPlaylist(name: $name, spotifyPlaylistID: $spotifyPlaylistID) {
    _id
    name
  }
}
`;


export const DELETE_USER_PLAYLIST = gql`
mutation DeleteUserPlaylist($name: String!, $spotifyPlaylistId: String!) {
  deleteUserPlaylist(name: $name, spotifyPlaylistID: $spotifyPlaylistId) {
    name
    spotifyPlaylistID
  }
}
`

export const UPDATE_USER_PLAYLIST = gql`
mutation UpdateUserPlaylist($name: String!, $spotifyPlaylistId: String!) {
  updateUserPlaylist(name: $name, spotifyPlaylistID: $spotifyPlaylistId) {
    name
    spotifyPlaylistID
  }
}
`;