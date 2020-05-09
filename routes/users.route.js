var express = require("express");
var userController = require("../controllers/users.controller");
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended : false});


router.get('/', userController.get);
router.get('/:email', userController.detail);
router.post('/',urlencodedParser, userController.post);
router.delete('/:id',userController.delete);

module.exports = router;
