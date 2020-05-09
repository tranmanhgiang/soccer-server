var express = require("express");
var adminController = require("../controllers/admins.controller");
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended : false});


router.get('/', adminController.get);
router.get('/:id', adminController.detail);
router.post('/',urlencodedParser, adminController.post);
router.delete('/:id',adminController.delete);

module.exports = router;
