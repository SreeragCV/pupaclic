const User = require("../model/user.js");
const jwtGenerator = require("../utils/jwtGenerator.js");

exports.createUser = async (req, res) => {
  try {
    const { type, firstName, lastName, email } = req.body;
    if (!type || !firstName || !lastName || !email) {
      return res.status(401).json({ error: "fields must not be empty" });
    }
    const existingUser = await User.find({ email });
    if (existingUser.length > 0) {
      return res.status(402).json({error: "Email aleardy exist"})
    }
    const newUser = new User({ type, firstName, lastName, email });
    await newUser.save();
    const token = jwtGenerator(newUser.id, newUser.type);
    return res.status(200).json({ message: "SUCCESS", token });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};
