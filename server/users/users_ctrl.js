const User = require('./users_model');

const users = {
  '/signup': {
    'post': (req, res) => {
      const username = req.body.username,
            password = req.body.password,
            email = req.body.email;

      console.log(req.body);
      console.log(username);

      User.findOne({ 'username': username })
        .then((user) => {
          if(!user) {
            const newUser = new User({
              username: username,
              password: password,
              email: email
            });

            newUser.save((err, data) => {
              if(err) {
                console.log(`Error: ${err}`);
                res.send(err);
              } else {
                res.send(`Saved: ${data}`);
              }
            });
          } else {
            res.status(404).json('Username already exists!');
          }
        })
        .catch((err) => {
          res.send('Error creating user: ', err.message);
        });
    }
  }
}

module.exports = users;
