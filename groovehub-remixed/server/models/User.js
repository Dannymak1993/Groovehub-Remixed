const bcrypt = require('bcrypt');
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
  password: {
    type: String,
    required: true,
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


//anytime something is saved checks password and if the password has been changed 
//before it saves it will salt the password
//bcrypt thing
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
