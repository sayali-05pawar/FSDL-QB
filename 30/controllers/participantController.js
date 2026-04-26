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

        res.sendFile("success.html", { root: "./views" });

    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
};