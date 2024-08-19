const connection = require('../config/connection');
const { Thought, User} =require('../models');
const getRandomName = require('./data');

console.log(getRandomName());
connection.on('error', (err) => err);

connection.once('open', async () => {
    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts'}).toArray()
    if (thoughtCheck.length) {
        await connection.dropCollection('thoughts');
    }

    let userCheck = await connection.db.listCollections({ name: 'users'}).toArray();
    if (userCheck.length) {
        await connection.dropCollection('users');
    }

    const users = [];

    for (let i = 0; i < 20; i++) {
        const username = getRandomUsername()
        const email = getRandomEmail()

        users.push({
            username,
            email,
        })
    }

    await User.insertMany(users);
    console.log(users)
    process.exit(0);
});
  