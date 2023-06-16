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

// AddUser:
// mutation {
//   addUser(username: "joecodesatx7", email: "joecodesatx7@gmail.com", password: "pword1237") {
//     _id
//     username
//     email
//   }
// }

export const ADD_USER_PLAYLIST = gql`
mutation AddUserPlaylist($name: String!, $spotifyPlaylistID: String!) {
  addUserPlaylist(name: $name, spotifyPlaylistID: $spotifyPlaylistID) {
    _id
    name
  }
}
`;

//TODO: add delete mutation
// export const DELETE_USER_PLAYLIST = gql``