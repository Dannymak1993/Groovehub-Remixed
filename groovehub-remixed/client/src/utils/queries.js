import { gql } from '@apollo/client';

export const QUERY_PLAYLIST = gql`
query Playlists {
  playlists {
        genre
        name
        spotifyPlaylistID
    }
}
`;


// export const QUERY_USER = gql`
//   query user($username: String!) {
//     user(username: $username) {
//       _id
//       username
//       email
//       thoughts {
//         _id
//         thoughtText
//         createdAt
//       }
//     }
//   }
// `;

// export const QUERY_USERS = gql`
// QueryAllUsers:
// query {
//   users {
//     _id
//     username
//     email
//   }
// }
// `;

// QueryAllPlaylists:
// query {
//   playlists {
//     _id
//     title
//     songs
//     spotifyPlaylistID
//     upvotes
//     downvotes
//     user {
//       _id
//       username
//     }
//   }
// }