// communityPlaylistSeed.js
const communityPlaylistSeed = [
    {
        name: 'Community Playlist 1',
        spotifyPlaylistID: '37i9dQZF1DXcBWIGoYBM5M', // just a random Spotify playlist ID
        genre: 'Pop',
        community: true,
        songs: ['Song 1', 'Song 2'], // replace with actual songs
        upvotes: 10,
        downvotes: 2,
    },
    {
        name: 'Community Playlist 2',
        spotifyPlaylistID: '37i9dQZF1DWXRqgorJj26U', // just a random Spotify playlist ID
        genre: 'Rock',
        community: true,
        songs: ['Song 3', 'Song 4'], // replace with actual songs
        upvotes: 8,
        downvotes: 1,
    },
    // add more community playlists as per your need...
];

async function seedCommunityPlaylist(db) {
    try {
        await db.CommunityPlaylist.deleteMany({});
        const data = await db.CommunityPlaylist.collection.insertMany(communityPlaylistSeed);
        console.log("Community Playlist seed insertion completed: ", data.result);
    } catch (err) {
        console.error("Community Playlist seed insertion error: ", err);
    }
};

module.exports = seedCommunityPlaylist;
