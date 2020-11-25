const publicRoutes = {
  'POST /register': 'UserController.register', // alias for POST /user
  'POST /login': 'UserController.login',
  'POST /add/detail': 'WifiController.add',
  'PUT /update/detail/:id': 'WifiController.update',
};

module.exports = publicRoutes;
