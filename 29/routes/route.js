const express = require('express');
const router = express.Router();
const { getAllStudents, createStudent } = require('../controllers/controller');

// API routes
router.get('/students', getAllStudents);
router.post('/students', createStudent);

module.exports = router;