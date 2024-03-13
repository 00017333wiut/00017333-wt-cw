const express = require('express');
const router = express.Router();

// Product model
const Product = require('../models/Product');

// GET all products
router.get('/', (req, res) => {
  Product.find()
    .then((produts) => res.json(products))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// POST a new product
router.post('/', (req, res) => {
  const { title, date, location, description } = req.body;
  const newProduct = new Product({ title, date, location, description });

  newProduct
    .save()
    .then(() => res.json('Product added'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;