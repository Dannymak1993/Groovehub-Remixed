const { gql } = require('apollo-server-express');


const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    spotifyID: String
    featuredPlaylists: [FeaturedPlaylist]
    userPlaylists: [UserPlaylist]
    communityPlaylists: [CommunityPlaylist]
  }

  type FeaturedPlaylist {
    _id: ID
    name: String
    songs: [String]
    spotifyPlaylistID: String
    genre: String
    upvotes: Int
    downvotes: Int
    user: User
  }

  type UserPlaylist {
    _id: ID
    name: String
    songs: [String]
    spotifyPlaylistID: String
    genre: String
    upvotes: Int
    downvotes: Int
    user: User
  }

  type CommunityPlaylist {
    _id: ID
    name: String
    songs: [String]
    spotifyPlaylistID: String
    genre: String
    upvotes: Int
    downvotes: Int
    user: User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(_id: ID!): User
    featuredPlaylists: [FeaturedPlaylist]
    featuredPlaylist(_id: ID!): FeaturedPlaylist
    userPlaylists: [UserPlaylist]
    userPlaylist(_id: ID!): UserPlaylist
    communityPlaylists: [CommunityPlaylist]
    communityPlaylist(_id: ID!): CommunityPlaylist
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth

    login(email: String!, password: String!): Auth


    addFeaturedPlaylist(name: String!, songs: [String]!, spotifyPlaylistID: String!, genre: String, upvotes: Int, downvotes: Int, user: ID): FeaturedPlaylist
    addUserPlaylist(name: String!, songs: [String], spotifyPlaylistID: String!, genre: String, upvotes: Int, downvotes: Int, user: ID): UserPlaylist
    addCommunityPlaylist(name: String!, songs: [String]!, spotifyPlaylistID: String!, genre: String, upvotes: Int, downvotes: Int, user: ID): CommunityPlaylist
  }
`;

module.exports = typeDefs;
