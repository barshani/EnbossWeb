var express = require('express');
var router = express.Router();
const products = require('../controllers/products');

router.get('/', products.getAll);
router.get('/:id', products.getOneById);
router.post('/', products.addNew);
router.put('/:id', products.updateById);

module.exports = router;