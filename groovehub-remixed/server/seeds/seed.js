require('dotenv').config({ path: '../.env' });
const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI);

const playlistSeed = [
  {
    name: 'Anime',
    spotifyPlaylistID: '13D1ZGY11YGeUSVGosTy6K',
    genre: 'Anime',
  },
  {
    name: 'Classical',
    spotifyPlaylistID: '3CBWk7vCr7QhbDMAaOF8Ej',
    genre: 'Classical',
  },
  {
    name: 'Country',
    spotifyPlaylistID: '25gZy93qSKa7eqwNnWtNao',
    genre: 'Country',
  },
  {
    name: 'Disney',
    spotifyPlaylistID: '13YukHnAvQGCVzhEVaXqgY',
    genre: 'Disney',
  },
  {
    name: 'Electronic',
    spotifyPlaylistID: '5MLf6MBHHs6YDtTERE66RS',
    genre: 'Electronic',
  },
  {
    name: 'Hip Hop',
    spotifyPlaylistID: '2Z2WhCLV5yILWQabtriCiG',
    genre: 'Hip Hop',
  },
  {
    name: 'Jazz',
    spotifyPlaylistID: '0L1MSYfkwfRMbDrt7p7Dd1',
    genre: 'Jazz',
  },
  {
    name: 'K-pop',
    spotifyPlaylistID: '5X0GlUpZje14AdggmJbPVb',
    genre: 'K-pop',
  },
  {
    name: 'Rock',
    spotifyPlaylistID: '2eH2OlE2CWb50U7GrL2m65',
    genre: 'Rock',
  },
];

db.Playlist
  .deleteMany({})
  .then(() => db.Playlist.collection.insertMany(playlistSeed))
  .then(data => {
    console.log("Insert operation result: ", data);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

