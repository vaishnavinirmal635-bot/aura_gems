const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// @route   GET /api/products
// @desc    Fetch all products
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { category, isPremium } = req.query;
    let query = {};
    
    if (category && category !== 'All') {
      query.category = category;
    }
    
    if (isPremium === 'true') {
      query.isPremium = true;
    }

    const products = await Product.find(query);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

// @route   GET /api/products/:id
// @desc    Fetch single product
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

module.exports = router;
