const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// TODO: [USER] - Write the Mongoose pre-save hook to enforce email uniqueness at the model level
// CONTEXT: Use a findOne query inside the hook; call next() on success, next(new Error(...)) on duplicate

const User = mongoose.model('User', userSchema);

module.exports = User;
