const bcrypt = require('bcrypt');

const utilities = {

  hashPassword: (password) => {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, 10, (error, hash) => {
        if(error) {
          reject(error);
        } else {
          resolve(hash);
        }
      });
    });
  },

  comparePassword: (password, hash) => {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, hash, (error, result) => {
        if(error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }

}

module.exports = utilities;
