const { User, Playlist } = require('../models');

const resolvers = {
  Query: {
    users: async () => await User.find(),
    playlists: async () => await Playlist.find(),
  },
  Mutation: {
    addUser: async (parent, { username, email, password }, context) => {
      const user = await User.create({ username, email, password });
      return user;
    },
    addPlaylist: async (parent, { name, songs, spotifyPlaylistID, genre, upvotes, downvotes, user }, context) => {
      const playlist = await Playlist.create({ name, songs, spotifyPlaylistID, genre, upvotes, downvotes, user });
      return playlist;
    }
  }
};

module.exports = resolvers;
