const User = require("../model/user.js");

exports.createUser = async (req, res) => {
  try {
    const { type, firstName, lastName, email } = req.body;
    if (!type || !firstName || !lastName || !email){
      return res.status(401).json({ error: "fields must not be empty" });
    }
    const newUser = await new User({ type, firstName, lastName, email });
    newUser.save();
    return res.json({ message: "SUCCESS" });
  } catch (error) {
    res.status(400).send(error);
  }
};
