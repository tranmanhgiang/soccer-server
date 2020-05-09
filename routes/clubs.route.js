var express = require("express");
var clubController = require("../controllers/clubs.controller");
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended : false});


router.get('/', clubController.get);
router.get('/:u_id',clubController.detail);
router.put('/:u_id',urlencodedParser,clubController.update);
router.post('/',urlencodedParser, clubController.post);
router.delete('/:id',clubController.delete);

module.exports = router;
