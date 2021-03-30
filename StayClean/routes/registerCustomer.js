// Dependencies
const express = require('express');
const router = express.Router();

// Get page
router.get('/', (req,res) => {
    res.render('registerCustomer', {title:'Register Customer'});
  });

module.exports = router;