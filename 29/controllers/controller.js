const Student = require('../models/Student');

// Get all students
const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students); // 🔥 changed
    } catch (err) {
        res.status(500).json({ error: 'Error fetching students' });
    }
};

// Create student
const createStudent = async (req, res) => {
    try {
        const { name, rollNo, branch } = req.body;

        const newStudent = new Student({ name, rollNo, branch });
        await newStudent.save();

        res.json({ message: 'Student added successfully' }); // 🔥 changed
    } catch (err) {
        res.status(500).json({ error: 'Error creating student' });
    }
};

module.exports = {
    getAllStudents,
    createStudent
};