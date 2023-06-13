const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  spotifyAccessToken: {
    type: String,
    required: false
  },
  spotifyRefreshToken: {
    type: String,
    required: false
  },
  spotifyID: {
    type: String,
    required: false
  },
  favorites: [{
    type: Schema.Types.ObjectId,
    ref: 'Playlist'
  }],
});

module.exports = mongoose.model('User', userSchema);
