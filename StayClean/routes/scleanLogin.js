// Dependencies
const express = require('express');
const router = express.Router();

//Get page
router.get('/', (req,res) => {
    res.render('scleanLogin', {title:'Login'});
  });

  module.exports = router;