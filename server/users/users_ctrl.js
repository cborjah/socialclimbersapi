const UserModel = require('./users_model');

const users = {
  '/signup': {
    'post': (req, res) => {
      const newUser = new UserModel({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
      });

      newUser.save((err, data) => {
        if(err) res.error(err);
        else res.send(`Saved: ${data}`);
      });
    }
  }
}

module.exports = users;
