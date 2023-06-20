// userSeed.js
const bcrypt = require("bcrypt");

async function seedUsers(db) {
    const passwordHash = await bcrypt.hash('password123', 10);
    const userSeed = [
        {
            username: 'TestUser1',
            email: 'test1@test.com',
            password: passwordHash,
        },
        {
            username: 'TestUser2',
            email: 'test2@test.com',
            password: passwordHash,
        }
    ];

    try {
        await db.User.deleteMany({});
        const data = await db.User.collection.insertMany(userSeed);
        console.log("User seed insertion completed: ", data.result);
    } catch (err) {
        console.error("User seed insertion error: ", err);
    }
}

module.exports = seedUsers;
