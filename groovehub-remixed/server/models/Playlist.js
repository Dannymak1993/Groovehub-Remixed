const mongoose = require('mongoose');
const { Schema } = mongoose;

const playlistSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  spotifyPlaylistID: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: false
  },
  songs: [{
    type: String,
    required: false
  }],
  upvotes: {
    type: Number,
    default: 0,
    required: false
  },
  downvotes: {
    type: Number,
    default: 0,
    required: false
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: false
  }
});

module.exports = mongoose.model('Playlist', playlistSchema);
