const { default: mongoose } = require("mongoose");
const moongose = require("mongoose");
const { Schema } = moongose;

const SubscriberEmailSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});
SubscriberEmailSchema.set("timestamps", true);
const SubscriberEmail = mongoose.model("subscriber_email", SubscriberEmailSchema);
module.exports = SubscriberEmail;
