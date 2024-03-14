const Profile = require("../model/profile");

module.exports.createProfile = async (req, res) => {
  try {
    const { gender, age, place, education } = req.body;
    const user_id = req.params.id;
    if (user_id !== req.user_id) {
      return res.status(401).json({ error: "Invalid user" });
    }
    if (!gender || !age || !place || !education) {
      return res.status(402).json({ error: "fields must not be empty" });
    }
    const newProfile = new Profile({
      profile_info: { gender, age, place, education },
      user_id,
    });
    await newProfile.save();
    console.log(newProfile);
    return res.status(200).json({ message: "SUCCESS" });
  } catch (e) {
    return res.status(500).json({error: "Server Error"})
  }
};
