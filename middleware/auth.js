const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // get Authentication header value
  // console.log("Body:", req.header("Authorization"));
  // console.log("Body:", req.body.headers);
  // console.log("Header:", req.header("Authorization"));

  let authzHeader = "";
  if (req.body.headers) {
    authzHeader = req.body.headers.Authorization;
  } else {
    authzHeader = req.header("Authorization");
  }
  console.log("Auth Header:", authzHeader);

  // const authzHeader = req.body.headers.Authorization;
  if (!authzHeader) {
    return res.status(401).json({
      message: "Authentication details empty",
    });
  }

  // check for "Bearer "
  if (authzHeader.slice(0, 7) !== "Bearer ") {
    return res.status(401).json({
      message: "Invalid auth type",
    });
  }

  // get value after "Bearer ", the actual JWT token
  const token = authzHeader.slice(7);
  if (token.length === 0) {
    return res.status(401).json({
      message: "Invalid auth token",
    });
  }

  // checking if token is signed by same secret and setting token info into global variable
  const verified = jwt.verify(token, process.env.JWT_SECRET);
  console.log("Verified:", verified);

  if (verified) {
    res.locals.userAuth = verified;
    next();
    return;
  }

  return res.status(401).json({
    message: "Invalid auth token",
  });
};
