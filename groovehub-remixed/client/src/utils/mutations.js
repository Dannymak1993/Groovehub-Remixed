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
mutation AddUserPlaylist($name: String!, $spotifyPlaylistID: String!, $imgUrl: String) {
  addUserPlaylist(name: $name, spotifyPlaylistID: $spotifyPlaylistID, imgUrl: $imgUrl) {
    _id
    name
    imgUrl
  }
}
`;


export const DELETE_USER_PLAYLIST = gql`
mutation DeleteUserPlaylist($spotifyPlaylistId: String!) {
  deleteUserPlaylist(spotifyPlaylistID: $spotifyPlaylistId) {
    spotifyPlaylistID
  }
}
`

export const UPDATE_USER_PLAYLIST = gql`
mutation UpdateUserPlaylist(
  $spotifyPlaylistID: String!
  $name: String
  ) {
    updateUserPlaylist(
    spotifyPlaylistID: $spotifyPlaylistID
    name: $name
    ) {
      name
       }
  }
`;

export const ADD_FAVORITE_PLAYLIST = gql`
  mutation AddFavoritePlaylist($spotifyPlaylistID: String!, $imgUrl: String, $name: String, $genre: String) {
    addFavoritePlaylist(spotifyPlaylistID: $spotifyPlaylistID, imgUrl: $imgUrl, name: $name, genre: $genre) {
      _id
      username
      favorites {
        spotifyPlaylistID
        imgUrl
        name
        genre
      }
    }
  }
`;

export const REMOVE_FAVORITE_PLAYLIST = gql`
  mutation RemoveFavoritePlaylist($spotifyPlaylistID: String!) {
    removeFavoritePlaylist(spotifyPlaylistID: $spotifyPlaylistID) {
      _id
      username
      favorites {
        spotifyPlaylistID
        imgUrl
        name
        genre
      }
    }
  }
`;

export const ADD_COMMUNITY_PLAYLIST = gql`
mutation Mutation($name: String!, $spotifyPlaylistId: String!, $imgUrl: String) {
  addCommunityPlaylist(name: $name, spotifyPlaylistID: $spotifyPlaylistId, imgUrl: $imgUrl) {
    name
    spotifyPlaylistID
    imgUrl
  }
}
`;