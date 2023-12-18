// routes.js
const express = require('express');
const FootballModel = require('./db');

const router = express.Router();

router.post('/add', async (req, res) => {
  try {
    const newRecord = new FootballModel(req.body);
    await newRecord.save();
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add other routes...

module.exports = router;
