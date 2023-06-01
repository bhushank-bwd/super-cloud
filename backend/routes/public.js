const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const SubscriberEmail = require("../models/SubscriberEmail");
router.post(
  "/subscribe",
  [body("email", "Enter a valid email address").isEmail()],
  async (req, res) => {
    let status = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: status,
        errors: errors.array(),
        message: "Validation errors",
      });
    }
    try {
      let email_document = await SubscriberEmail.findOne({
        email: req.body.email,
      });
      console.log(email_document);
      if (email_document) {
        const updatedDocument = await SubscriberEmail.findOneAndUpdate(
          { email: req.body.email }, // Filter condition to find the document
          {
            $set: {
              status: true,
            },
          }, // Update the document with new values
          { new: true } // Option to return the updated document instead of the original
        );
        status = true;
        message = "Subscribed successfully";
        return res.status(200).json({ status, message });
      }
      email_document = await SubscriberEmail.create({
        email: req.body.email,
      });
      status = true;
      message = "Subscribed successfully";
      return res.status(200).json({ status, message });
    } catch (error) {
      console.log(error.message);
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }
);
module.exports = router;
