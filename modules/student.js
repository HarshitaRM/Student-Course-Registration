const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  course: String,
  semester: Number
});

module.exports = mongoose.model("Student", studentSchema);
