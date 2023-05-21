const { default: mongoose } = require("mongoose");
const moongose = require("mongoose");
const { Schema } = moongose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});
UserSchema.set("timestamps", true);
const User = mongoose.model("user", UserSchema);
module.exports = User;
