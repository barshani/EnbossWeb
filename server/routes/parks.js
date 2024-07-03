var express = require('express');
var router = express.Router();
const parks = require('../controllers/parks');

router.get('/', parks.getAll);
router.get('/:id', parks.getOneById);
router.post('/', parks.addNew);
router.put('/:id', parks.updateById);
router.delete('/:id', parks.delete);

module.exports = router;