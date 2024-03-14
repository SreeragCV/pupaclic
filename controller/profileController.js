const Profile = require("../model/profile");

module.exports.createProfile = async (req, res) => {
  const { gender, age, place, education, employement } = req.body;
  const newProfile = await new Profile({
    profile_info: { gender, age, place, education, employement },
    user_id
  });
};
