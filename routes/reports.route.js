var express = require("express");
var reportController = require("../controllers/reports.controller");
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended : false});


router.get('/', reportController.get);
router.get('/:id', reportController.detail);
router.post('/',urlencodedParser, reportController.post);
router.delete('/:id',reportController.delete);

module.exports = router;
