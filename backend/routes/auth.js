const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const j = require("bcryptjs");
var jwt = require("jsonwebtoken");
const User = require("../models/User");

router.post("/register", async (req, res) => {
  console.log(req.body);
});
module.exports = router;

