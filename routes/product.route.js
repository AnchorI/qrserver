const express = require('express');
const router = express.Router();


// Require the controllers
const product_controller = require('../controllers/product.controller');


// simple test url to check that all of our files are communicating correctly.
router.get('/get', product_controller.product_get);
router.get('/:id', product_controller.product_details);
router.put('/:id/update', product_controller.product_update);
router.delete('/:id/delete', product_controller.product_delete);
router.post('/create', product_controller.product_create);




module.exports = router;
