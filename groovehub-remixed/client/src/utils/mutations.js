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


// AddPlaylist:
// mutation {
//   addPlaylist(
//     user: "6487883bfe89ef692c6e65b9",
//     title: "UberLeetTechnoTrance",
//     songs: ["song1", "song2", "song3"],
//     spotifyPlaylistID: "1a2!Q@W1q2w!Q@W",
//     upvotes: 5,
//     downvotes: 1
//   ) {
//     _id
//     user {
//       _id
//       username
//     }
//     title
//     songs
//     spotifyPlaylistID
//     upvotes
//     downvotes
//   }
// }

