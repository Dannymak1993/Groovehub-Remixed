require('dotenv').config({ path: '../.env' });
const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI);

const seedUser = require('./userSeed');
const seedCommunityPlaylist = require('./communityPlaylistSeed');
const seedFeaturedPlaylist = require('./featuredPlaylistSeed');

async function seedDatabase() {
    try {
        await seedUser(db);
        await seedCommunityPlaylist(db);
        await seedFeaturedPlaylist(db);
    } catch (err) {
        console.error(err);
    } finally {
        process.exit(0);
    }
}

seedDatabase();
