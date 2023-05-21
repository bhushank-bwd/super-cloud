const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const j = require("bcryptjs");
var jwt = require("jsonwebtoken");
const User = require("../models/User");

router.post(
  "/register",
  [
    body("username")
      .notEmpty()
      .withMessage("Enter a username")
      .isLength({ min: 3 })
      .withMessage("Enter a username(min 3 chars)"),
    body("email", "Enter a valid email address").isEmail(),
    body("phoneno", "Enter a valid phone number (8 to 13 digits)").matches(
      /^[0-9]{8,13}$/
    ),
  ],
  async (req, res) => {
    let status = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ status: status, errors: errors.array() });
    }
    
    console.log("validation done");
    return res.status(400).json({ status: true, data:req.body });
  }
);
module.exports = router;
