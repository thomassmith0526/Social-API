const connection = require('../config/connection');
const { Thought, User} =require('../models');
const getRandomName = require('./data');

console.log(getRandomName());
connection.on('error', (err) => err);

connection.once('open', async () => {
    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts'}).toArray()
})
  