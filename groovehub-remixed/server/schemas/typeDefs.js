const { gql } = require('apollo-server-express');


const typeDefs = gql`
  type FavoritePlaylist {
  spotifyPlaylistID: String
  imgUrl: String
  name: String
  genre: String
 }

  type User {
    _id: ID
    username: String
    email: String
    spotifyID: String
    featuredPlaylists: [FeaturedPlaylist]
    userPlaylists: [UserPlaylist]
    communityPlaylists: [CommunityPlaylist]
    favorites: [FavoritePlaylist]
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
    imgUrl: String
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
    imgUrl: String
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
    userFavorites(_id: ID!): [FavoritePlaylist]
    me: User
  }


 type Mutation {
    #These mutations are for user authentication
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    #These mutations are for the featured playlists
    addFeaturedPlaylist(name: String!, songs: [String]!, spotifyPlaylistID: String!, genre: String, upvotes: Int, downvotes: Int, user: ID): FeaturedPlaylist


    #These mutations are for the user's playlists (no longer used)
    addUserPlaylist(name: String!, songs: [String], spotifyPlaylistID: String!, imgUrl: String, genre: String, upvotes: Int, downvotes: Int, user: ID): UserPlaylist
    deleteUserPlaylist(spotifyPlaylistID: String!): UserPlaylist
    updateUserPlaylist(spotifyPlaylistID: String!, name: String, songs: [String], imgUrl: String, genre: String, upvotes: Int, downvotes: Int, user: ID): UserPlaylist

    #These mutations are for the user's favorite playlists
    addFavoritePlaylist(spotifyPlaylistID: String!, imgUrl: String, name: String!, genre: String): User
    removeFavoritePlaylist(spotifyPlaylistID: String!): User
    updateFavoritePlaylistName(spotifyPlaylistID: String!, newName: String!): User

    #These mutations are for the community playlists
    deleteCommunityPlaylist(spotifyPlaylistID: String!): CommunityPlaylist
    addCommunityPlaylist(name: String!, songs: [String], spotifyPlaylistID: String!, imgUrl: String, genre: String, upvotes: Int, downvotes: Int, user: ID): CommunityPlaylist
  }
`;

module.exports = typeDefs;
