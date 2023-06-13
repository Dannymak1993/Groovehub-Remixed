const mongoose = require('mongoose');
const { Schema } = mongoose;

const playlistSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  spotifyPlaylistID: {
    type: String,
    required: true,
  },
  songs: [{
    type: String,
    required: true
  }],
  upvotes: {
    type: Number,
    default: 0
  },
  downvotes: {
    type: Number,
    default: 0
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('Playlist', playlistSchema);
