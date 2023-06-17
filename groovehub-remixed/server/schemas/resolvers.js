const { AuthenticationError } = require('apollo-server-express');
const { User, FeaturedPlaylist, UserPlaylist, CommunityPlaylist } = require('../models');
const { signToken } = require('../utils/auth');

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
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }, context) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
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
    //todo updateUserPlaylist:
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
