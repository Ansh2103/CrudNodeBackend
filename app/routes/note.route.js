var express = require ('express');
const router = express.Router();

var noteController = require('../controller/note.controller')
var expressValidator = require('express-validator')

router.use(expressValidator())




router.post('/create',noteController.note_create);

module.exports = router