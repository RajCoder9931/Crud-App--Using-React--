const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  password: String
});

// Ensure the model is exported correctly
const User = mongoose.model("User", userSchema);
module.exports = User;  // ✅ This is required for correct usage
