const User = require("../models/user.model");
var jwt = require("jsonwebtoken");
require("dotenv").config();

const newToken = (user) => {
  return jwt.sign({ user: user }, "som");
};

const register = async (req, res) => {
  try {
    //first check if a user with that email already exist
    let user = await User.findOne({ email: req.body.email }).lean().exec();

    //if user exists then throw an error
    if (user) {
      return res
        .status(400)
        .json({ status: "error", message: "user already exists" });
    }

    //otherwise create user and then hash the password

    user = await User.create(req.body);

    //create a token
    const token = newToken(user);

    //then we need to return the token and user information to frontend

    return res.status(201).json({ user: user, token: token });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

const login = async (req, res) => {
  try {
    //first check if a user exists with that email already
    let user = await User.findOne({ email: req.body.email }).exec();
    // return res.send(user)

    //if not throw an error
    if (!user) {
      return res
        .status(404)
        .json({ status: "error", message: "user does not exist plz register" });
    }
    //if user exist then match with the password
    const match = user.checkPassword(req.body.password);

    //if not match throw an error
    if (!match) {
      return res
        .status(400)
        .json({ status: "error", message: "password not match" });
    }

    //if match then create a token
    const token = newToken(user);

    //return the token to the front end
    return res.status(200).json({ user: user, token: token });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

module.exports = { register, login };
