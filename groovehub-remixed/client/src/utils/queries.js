import { gql } from '@apollo/client';

export const QUERY_COMMUNITY_PLAYLIST = gql`
query CommunityPlaylists {
  communityPlaylists {
    genre
    name
    spotifyPlaylistID
    imgUrl
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

export const GET_USER_FAVORITES = gql`
  query GetUserFavorites($id: ID!) {
    user(_id: $id) {
      favorites {
        spotifyPlaylistID
        imgUrl
        name
      }
    }
  }
`;