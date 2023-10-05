const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticate = (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    
    if (!authorization) {
      throw {
        status: 401,
        message: "No authorization token",
      };
    }
    const token = authorization.split(" ")[1];
    // ['Bearer', 'eyJhbGciOiJIUzU...'];

    console.log(token);
    const user = jwt.verify(token, process.env.JWT_SECRET, {
      algorithms: "HS512",
    });
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authenticate;
