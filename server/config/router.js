const router = require('express').Router(),
      users = require('../users/users_ctrl');

const controllers = [
  users
];

for(let controller of controllers) {
  for(let route in controller) {
    if(controller[route].get) router.get(route, controller[route].get);
		if(controller[route].post) router.post(route, controller[route].post);
		if(controller[route].put) router.put(route, controller[route].put);
		if(controller[route].delete) router.delete(route, controller[route].delete);
  }
}

module.exports = router;
