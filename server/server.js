const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      login = require('../resources/credentials');

let app = express();

app.set('port', process.env.PORT || 7700);

app.listen(app.get('port'), () => console.log(`Listening on port ${app.get('port')}...`));

console.log(`username: ${login.username}`);

const URL = `mongodb://${login.username}:${login.password}@ds153521.mlab.com:53521/socialclimbers`;
mongoose.connect(URL);

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log(`Mongoose connected...`));
