const mongoose = require('mongoose');
const { Schema } = mongoose;

const userplaylistSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  spotifyPlaylistID: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: false,
  },
  genre: {
    type: String,
    required: false
  },
  community: {
    type: Boolean,
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

module.exports = mongoose.model('UserPlaylist', userplaylistSchema);
