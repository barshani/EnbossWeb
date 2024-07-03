var express = require('express');
var router = express.Router();
const favorites = require('../controllers/favorites');

router.get('/', favorites.getAll);
router.get('/:id', favorites.getOneById);
router.post('/', favorites.addNew);
router.put('/:id', favorites.liked);

module.exports = router;