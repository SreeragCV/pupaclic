const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");

exports.verifyUserToken = (req, res, next) => {
  let token = req.headers.authorization;
  if (!token)
    return res.status(401).send("Access Denied / Unauthorized Request");
  try {
    token = token.split(" ")[1];
    if (token === "null" || !token)
      return res.status(401).send("Unauthorized Request");
    let verifiedUser = jwt.verify(token, process.env.TOKEN_SECRET);
    if (!verifiedUser) return res.status(401).send("Unauthorized Request");
    req.user_id = verifiedUser.user_id;
    req.type = verifiedUser.type;
    next();
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
};
