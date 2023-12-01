const express = require('express');
const router = express.Router();
const indexController = require("../controllers/indexController")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pimienta & Sal', productos });
});

module.exports = router;
