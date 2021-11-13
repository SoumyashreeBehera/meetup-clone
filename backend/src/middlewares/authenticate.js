require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, "som", function (err, user) {
      if (err) return reject(err);
      return resolve(user);
    });
  });
};

const authenticate = async (req, res, next) => {
  //check if authorization header is present and if not throw an error

  let bearerToken = req?.headers?.authorization;

  if (!bearerToken) {
    return res.status(401).json({
      status: "error",
      message: "you did not send the authorization header1 ",
    });
  }

  //check if authorization header has a barer token and if not throw an error
  if (!bearerToken.startsWith("Bearer ")) {
    return res.status(401).json({
      status: "error",
      message: "you did not send the authorization Bearer ",
    });
  }

  //extract the token from the bearer token
  const token = bearerToken.split(" ")[1];
  // console.log(token)

  try {
    //decrypt the token and try to fetch the user
    const user = await verifyToken(token);

    // console.log(user.user)
    //add user to the request

    req.user = user.user;
    // console.log(user.user)
    //return next
    return next();
  } catch (err) {
    return res
      .status(400)
      .json({ status: "you are not ssending correct token" });
  }
};

module.exports = authenticate;
