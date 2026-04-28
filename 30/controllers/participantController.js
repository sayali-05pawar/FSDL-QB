const Participant = require("../models/Participant");

// Save participant
exports.registerParticipant = async (req, res) => {
    try {
        const { name, email, eventName } = req.body;

        const participant = new Participant({
            name,
            email,
            eventName
        });

        await participant.save();

        res.json("student registered successfully")

    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
};