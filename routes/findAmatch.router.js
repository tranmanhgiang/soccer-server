var express = require("express");
var findAmatchController = require("../controllers/findAmatch.controller");
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended : false});

router.get('/', findAmatchController.get);
router.get('/:id', findAmatchController.detail);
router.put('/:id',urlencodedParser,findAmatchController.update);
router.post('/',urlencodedParser, findAmatchController.post);
router.delete('/:id',findAmatchController.delete);

module.exports = router;