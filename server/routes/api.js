const express = require('express');
const router = express.Router();

const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});



module.exports = router;
