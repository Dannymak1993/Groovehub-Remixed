const { AuthenticationError } = require('apollo-server-express');
const { User, FeaturedPlaylist, UserPlaylist, CommunityPlaylist } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => await User.find(),
    user: async (parent, { _id }, context) => {
      return await User.findById(_id);
    },
    userFavorites: async (parent, { _id }, context) => {
      const user = await User.findById(_id);
      return user.favorites;
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

    addUserPlaylist: async (parent, { name, songs, spotifyPlaylistID, imgUrl, genre, upvotes, downvotes, user }, context) => {
      const playlist = await UserPlaylist.create({ name, songs, spotifyPlaylistID, imgUrl, genre, upvotes, downvotes, user });
      return playlist;
    },

    addCommunityPlaylist: async (parent, { name, songs, spotifyPlaylistID, imgUrl, genre, upvotes, downvotes, user }, context) => {
      const playlist = await CommunityPlaylist.create({ name, songs, spotifyPlaylistID, imgUrl, genre, upvotes, downvotes, user });
      return playlist;
    },

    deleteUserPlaylist: async (parent, { name, songs, spotifyPlaylistID, imgURL, genre, upvotes, downvotes, user }, context) => {
      const playlist = await UserPlaylist.findOneAndDelete({ spotifyPlaylistID });
      return playlist;
    },

    deleteCommunityPlaylist: async (parent, { name, songs, spotifyPlaylistID, imgURL, genre, upvotes, downvotes, user }, context) => {
      const playlist = await CommunityPlaylist.findOneAndDelete({ spotifyPlaylistID });
      return playlist;
    },

    addFavoritePlaylist: async (parent, { spotifyPlaylistID, imgUrl, name, genre }, context) => {
      if (context.user) {
        const favoritePlaylist = {
          spotifyPlaylistID,
          imgUrl,
          name,
          genre: genre || "Unknown",  // if genre is not provided, set it as "Unknown" or any default value you like
        };
      
        const user = await User.findByIdAndUpdate(
          context.user._id,
          { $push: { favorites: favoritePlaylist } },
          { new: true }
        );
      
        return user;
      }
      throw new AuthenticationError('You need to be logged in to do that!');
    },

    removeFavoritePlaylist: async (parent, { spotifyPlaylistID }, context) => {
      if (context.user) {
        const user = await User.findByIdAndUpdate(
          context.user._id,
          { $pull: { favorites: { spotifyPlaylistID } } },
          { new: true }
        );
        return user;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    updateFavoritePlaylistName: async (parent, { spotifyPlaylistID, newName }, context) => {
      if (context.user) {
        const user = await User.findOneAndUpdate(
          { _id: context.user._id, 'favorites.spotifyPlaylistID': spotifyPlaylistID },
          { 'favorites.$.name': newName },
          { new: true }
        );
        return user;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    updateUserPlaylist: async (parent, { spotifyPlaylistID, name, songs, imgURL, genre, upvotes, downvotes, user }, context) => {
      const update = {};
      if (name) update.name = name;
      if (songs) update.songs = songs;
      if (imgURL) update.imgURL = imgURL;
      if (genre) update.genre = genre;
      if (upvotes !== undefined) update.upvotes = upvotes;
      if (downvotes !== undefined) update.downvotes = downvotes;
      if (user) update.user = user;

      const playlist = await UserPlaylist.findOneAndUpdate(
        { spotifyPlaylistID }, // filter object
        { $set: update }, // update object
        { new: true } // option object, `new: true` returns the updated document
      );

      return playlist;
    }
  }
};


module.exports = resolvers;
