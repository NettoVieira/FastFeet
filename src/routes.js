const { Router } = require('express');

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ messsage: 'Hello Word'});
})

module.exports = routes;