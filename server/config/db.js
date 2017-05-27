const mongoose = require('mongoose');
// const { username, password } = require('../../resources/credentials');

const URL = `mongodb://${process.env.USERNAME || username }:${process.env.PASSWORD || password }@ds153521.mlab.com:53521/socialclimbers`;
// console.log(URL);
mongoose.connect(URL);

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log(`Mongoose connected...`));

module.exports = db;
