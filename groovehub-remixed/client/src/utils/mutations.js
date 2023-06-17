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
mutation DeleteUserPlaylist($spotifyPlaylistId: String!) {
  deleteUserPlaylist(spotifyPlaylistID: $spotifyPlaylistId) {
    spotifyPlaylistID
  }
}
`

//constructs the mutation `Update_USER_PLAYLIST`:
export const UPDATE_USER_PLAYLIST = gql`
  mutation UpdateUserPlaylist(
    $spotifyPlaylistID: String!
    $name: String
    $imgURL: String
    $genre: String
    $upvotes: Int
    $downvotes: Int
    $user: ID
  ) {
    updateUserPlaylist(
      spotifyPlaylistID: $spotifyPlaylistID
      name: $name
      imgURL: $imgURL
      genre: $genre
      upvotes: $upvotes
      downvotes: $downvotes
      user: $user
    ) {
      _id
      name
      imgURL
      genre
      upvotes
      downvotes
      user
    }
  }
`;
