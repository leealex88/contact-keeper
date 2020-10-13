//middleware is just a function which has access to request and response objects
// when we hit the endpoint we can fire the middleware

const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  //get token from the header
  const token = req.header("x-auth-token");

  // check if no token
  if (!token) {
    return res
      .status(401)
      .json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(
      token,
      config.get("jwtSecret")
    );

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
