import { gql } from '@apollo/client';

export const QUERY_COMMUNITY_PLAYLIST = gql`
query CommunityPlaylists {
  communityPlaylists {
    genre
    name
    spotifyPlaylistID
  }
}
`;

export const QUERY_FEATURED_PLAYLIST = gql`
query FeaturedPlaylists {
  featuredPlaylists {
    genre
    name
    spotifyPlaylistID
  }
}
`;

export const QUERY_USER_PLAYLIST = gql`
query UserPlaylists {
  userPlaylists {
    genre
    name
    spotifyPlaylistID
    imgUrl
  }
}
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
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