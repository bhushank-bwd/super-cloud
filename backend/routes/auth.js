const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const User = require("../models/User");
const JWT_SECRET = "domefaver";
router.post(
  "/register",
  [
    body("username")
      .notEmpty()
      .withMessage("Enter a username")
      .isLength({ min: 3 })
      .withMessage("Enter a username(min 3 chars)"),
    body("email", "Enter a valid email address").isEmail(),
    body("password", "Enter a password(min 5 chars)").isLength({min:5}),
    body("phoneno", "Enter a valid phone number (8 to 13 digits)").matches(
      /^[0-9]{8,13}$/
    ),
  ],
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
      let user = await User.findOne({ email: req.body.email });

      if (user) {
        return res
          .status(400)
          .json({ status: status, message: "Email address already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const hashPass = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        username: req.body.username,
        password: hashPass,
        email: req.body.email,
        phoneno: req.body.phoneno,
      });
      const data = {
        user: {
          id: user.id,
        },
      };

      console.log("user entry done");
      return res.status(200).json({ status: true, data: data });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ status: false,message:"Something went wrong" });
    }
  }
);
module.exports = router;
