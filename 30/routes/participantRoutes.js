const express = require("express");
const router = express.Router();
const participantController = require("../controllers/participantController");

// POST route
router.post("/register", participantController.registerParticipant);

module.exports = router;