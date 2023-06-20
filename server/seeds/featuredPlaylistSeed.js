// featured playlists seed
const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI);

const featuredplaylistSeed = [
  {
    name: 'Anime',
    spotifyPlaylistID: '37i9dQZF1DX6XceWZP1znY',
    genre: 'Anime',
  },
  {
    name: 'Classical',
    spotifyPlaylistID: '37i9dQZF1DWWEJlAGA9gs0',
    genre: 'Classical',
  },
  {
    name: 'Country',
    spotifyPlaylistID: '37i9dQZF1DX1lVhptIYRda',
    genre: 'Country',
  },
  {
    name: 'Disney',
    spotifyPlaylistID: '37i9dQZF1DX8C9xQcOrE6T',
    genre: 'Disney',
  },
  {
    name: 'Electronic',
    spotifyPlaylistID: '37i9dQZF1DX1T3AaSrgy9r',
    genre: 'Electronic',
  },
  {
    name: 'Hip Hop',
    spotifyPlaylistID: '37i9dQZF1DX48TTZL62Yht',
    genre: 'Hip Hop',
  },
  {
    name: 'Jazz',
    spotifyPlaylistID: '37i9dQZF1DXbITWG1ZJKYt',
    genre: 'Jazz',
  },
  {
    name: 'K-pop',
    spotifyPlaylistID: '37i9dQZF1DX9tPFwDMOaN1',
    genre: 'K-pop',
  },
  {
    name: 'Rock',
    spotifyPlaylistID: '37i9dQZF1DWXRqgorJj26U',
    genre: 'Rock',
  },
];

module.exports = function seedeaturedPlaylist(db) {
  return db.FeaturedPlaylist.deleteMany({})
    .then(() => db.FeaturedPlaylist.collection.insertMany(featuredPlaylistSeed))
    .then(data => console.log(" Featured Playlist seed insertion completed: ", data.result))
    .catch(err => console.error("Featured Playlist seed insertion error: ", err));
};
