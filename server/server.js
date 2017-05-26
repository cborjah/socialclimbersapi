const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      login = require('../resources/credentials');

const app = express(),
      router = require('./config/router');

app.set('port', process.env.PORT || 7700);

app.listen(app.get('port'), () => console.log(`Listening on port ${app.get('port')}...`));

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);

const URL = `mongodb://${login.username}:${login.password}@ds153521.mlab.com:53521/socialclimbers`;
mongoose.connect(URL);

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log(`Mongoose connected...`));

// Routes
// const UserModel = require('./users/users_model');
// app.post('/signup', (req, res) => {
//   const newUser = new UserModel({
//     username: req.body.username,
//     password: req.body.password,
//     email: req.body.email
//   });
//
//   newUser.save((err, data) => {
//     if(err) console.log(err);
//     else console.log(`Saved: ${data}`);
//   });
// });
