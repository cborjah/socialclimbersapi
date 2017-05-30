const User = require('./users_model');
const utils = require('../config/utilities');

const users = {
  '/signup': {
    'post': (req, res) => {
      User.findOne({ 'username': req.body.username })
        .then((user) => {
          if(!user) {
            utils.hashPassword(req.body.password)
              .then((hash) => {
                const newUser = new User({
                  username: req.body.username,
                  password: hash,
                  email: req.body.email
                });

                newUser.save((err, data) => {
                  if(err) {
                    console.log(`Error saving new user: ${err}`);
                    res.status(400).send(err);
                  } else {
                    res.status(201).send(`Saved: ${data}`);
                  }
                });
              })
              .catch((err) => {
                console.log(`Error creating hash: ${err}`);
                res.status(400).send(err);
              });
          } else {
            res.status(200).json('Username already exists!');
          }
        })
        .catch((err) => {
          res.status(400).send('Error creating user: ', err.message);
        });
    }
  },
  '/signin': {
    'post': (req, res) => {
      User.findOne({ username: req.body.username })
        .then((user) => {
          utils.comparePassword(req.body.password, user.password)
            .then((isMatch) => {
              if(isMatch) {
                
              } else {
                res.status(200).send('Incorrect password.')
              }
            })
        })
    }
  }
}

module.exports = users;
