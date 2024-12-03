const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({message: 'Welcome to the server'});
})

router.post('/login', (req, res) => {
  const { username, email, password} = req.body;
  res.status(200).json({user: {username, email, password}});

})

module.exports = router;
