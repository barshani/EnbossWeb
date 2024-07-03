var express = require('express');
var router = express.Router();
const guides = require('../controllers/guides');

router.get('/', guides.getAll);
router.get('/:id', guides.getOneById);
router.post('/', guides.addNew);
router.put('/:id', guides.updateById);

module.exports = router;