import mongoose from "mongoose";

// create user schema or document/record structure/schema
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    select: false,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

// create "user" collection/table
export const User = mongoose.model("user", schema);
