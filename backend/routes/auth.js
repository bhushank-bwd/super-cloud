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
    body("password", "Enter a password(min 5 chars)").isLength({ min: 5 }),
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
        Stack: {
          expiresIn: "1d", // expires in 1 day(s)
        },
      };

      const authtoken = jwt.sign(data, JWT_SECRET);
      status = true;
      message = "Register successfully";
      return res.status(200).json({ status, authtoken, message });
    } catch (error) {
      console.log(error.message);
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }
);
router.post(
  "/login",
  [
    body("username", "Username required").notEmpty(),
    body("password", "Password required").notEmpty(),
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
      let user = await User.findOne({
        $or: [{ username: req.body.username }, { email: req.body.username }],
      });
      if (user) {
        const passwordCompare = await bcrypt.compare(
          req.body.password,
          user.password
        );
        if (passwordCompare) {
          const data = {
            user: {
              id: user.id,
            },
            Stack: {
              expiresIn: "1d", // expires in 1 day(s)
            },
          };

          const authtoken = jwt.sign(data, JWT_SECRET);
          const userName = user.username;
          status = true;
          message = "Login successfully";
          return res.status(200).json({ status, authtoken, message,userName });
        } else {
          return res.status(400).json({
            status: status,
            message: "Password not match",
          });
        }
      } else {
        return res.status(400).json({
          status: status,
          message: "User not found",
        });
      }
    } catch (error) {
      console.log(error.message);
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }
);
module.exports = router;
