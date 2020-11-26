const publicRoutes = {
  'POST /register': 'UserController.register', // alias for POST /user
  'POST /login': 'UserController.login',
  'POST /add/detail': 'WifiController.add',
  'PUT /update/detail/:id': 'WifiController.update',
  'GET /wifi-detail': 'WifiController.getAll',
};

module.exports = publicRoutes;
