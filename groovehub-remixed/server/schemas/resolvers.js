const { User, FeaturedPlaylist, UserPlaylist, CommunityPlaylist } = require('../models');

const resolvers = {
  Query: {
    users: async () => await User.find(),
    user: async (parent, { _id }, context) => {
      return await User.findById(_id);
    },
    featuredPlaylists: async () => await FeaturedPlaylist.find(),
    featuredPlaylist: async (parent, { _id }, context) => {
      return await FeaturedPlaylist.findById(_id);
    },
    userPlaylists: async () => await UserPlaylist.find(),
    userPlaylist: async (parent, { _id }, context) => {
      return await UserPlaylist.findById(_id);
    },
    communityPlaylists: async () => await CommunityPlaylist.find(),
    communityPlaylist: async (parent, { _id }, context) => {
      return await CommunityPlaylist.findById(_id);
    }
  },
  Mutation: {
    addUser: async (parent, { username, email, password }, context) => {
      const user = await User.create({ username, email, password });
      return user;
    },
    addFeaturedPlaylist: async (parent, { name, songs, spotifyPlaylistID, genre, upvotes, downvotes, user }, context) => {
      const playlist = await FeaturedPlaylist.create({ name, songs, spotifyPlaylistID, genre, upvotes, downvotes, user });
      return playlist;
    },
    addUserPlaylist: async (parent, { name, songs, spotifyPlaylistID, imgURL, genre, upvotes, downvotes, user }, context) => {
      const playlist = await UserPlaylist.create({ name, songs, spotifyPlaylistID, imgURL, genre, upvotes, downvotes, user });
      return playlist;
    },
    deleteUserPlaylist: async (parent, { name, songs, spotifyPlaylistID, imgURL, genre, upvotes, downvotes, user }, context) => {
      const playlist = await UserPlaylist.findOneAndDelete({ name, spotifyPlaylistID});
      return playlist;
    },
    addCommunityPlaylist: async (parent, { name, songs, spotifyPlaylistID, imgURL, genre, upvotes, downvotes, user }, context) => {
      const playlist = await CommunityPlaylist.create({ name, songs, spotifyPlaylistID, imgURL, genre, upvotes, downvotes, user });
      return playlist;
    },
    deleteCommunityPlaylist: async (parent, { name, songs, spotifyPlaylistID, imgURL, genre, upvotes, downvotes, user }, context) => {
      const playlist = await CommunityPlaylist.findOneAndDelete({ name, spotifyPlaylistID});
      return playlist;
    },
  }
};

module.exports = resolvers;
