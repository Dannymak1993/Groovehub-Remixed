const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    spotifyID: String
    playlists: [Playlist]
  }

  type Playlist {
    _id: ID
    name: String
    songs: [String]
    spotifyPlaylistID: String
    genre: String
    upvotes: Int
    downvotes: Int
    user: User
  }

  type Query {
    users: [User]
    playlists: [Playlist]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    addPlaylist(name: String!, songs: [String]!, spotifyPlaylistID: String!, genre: String, upvotes: Int, downvotes: Int, user: ID): Playlist
  }
`;

module.exports = typeDefs;
