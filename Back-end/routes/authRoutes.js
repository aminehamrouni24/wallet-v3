const User = require("../models/User");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = require("express").Router();
require("dotenv").config();
// creating a user
// @public
// @ register
// post request

const SECRET_KEY = process.env.SECRET_KEY;

router.post("/register", async (req, res) => {
  const { fullName, email, password, address, phoneNumber } = req.body;
  try {
    //    Verifying existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ status: false, msg: "User Already exists , try to login !!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      address,
      phoneNumber,
    });
    return res
      .status(200)
      .json({ status: true, msg: "User created successfully !!", data: user });
  } catch (err) {
    return res.status(500).json({ status: false, msg: err });
  }
});

//@ Login
// post

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    // verifying existing user
    const user = await User.findOne({ email });
    if (user) {
      // verifying the password

      const compare = await bcrypt.compare(password, user.password);
      if (compare) {
        //  creating the token
         const token = await jwt.sign(
           { user: user._id },
           process.env.SECRET_KEY,
           {
             expiresIn: "7 days",
           }
         );
         return res.status(200).json({
           status: true,
           msg: ` Welcome Back ${user.fullName} !`,
           data: user._id,
           token: token,
         });
      } else {
        return res
          .status(400)
          .json({ status: false, msg: "Password do not match" });
      }
    } else {
      return res
        .status(400)
        .json({
          status: false,
          msg: "User not found  , Please create an account",
        });
    }
  } catch (err) {
    return res.status(500).json({ status: false, msg: err });
  }
});

module.exports = router;
