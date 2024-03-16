const client = require("../typesense/typesenseConfig");
const Profile = require("../model/profile");

module.exports.createProfile = async (req, res) => {
  try {
    const { name, gender, age, place, education } = req.body;
    const user_id = req.params.id;
    if (user_id !== req.user_id) {
      return res
        .status(401)
        .json({ error: "Invalid user / Not authenticated" });
    }
    const profile = await Profile.find({ user_id: user_id });
    if (profile.length > 0) {
      return res.status(402).json({ message: "Profile already created" });
    }
    if (!name || !gender || !age || !place || !education) {
      return res.status(402).json({ error: "fields must not be empty" });
    }
    const newProfile = new Profile({
      profile_info: { name, gender, age, place, education },
      user_id,
    });
    await newProfile.save();

    const flattenedData = {
      id: newProfile._id,
      user_id: newProfile.user_id,
      createdAt: newProfile.createdAt.getTime(),
      updatedAt: newProfile.updatedAt.getTime(),
      ...newProfile.profile_info,
    };

    console.log(flattenedData);

    const response = await client
      .collections("profile")
      .documents()
      .import(flattenedData);

    return res.status(200).json({ message: "SUCCESS" });
  } catch (e) {
    return res.status(500).json({ error: "Server Error" });
  }
};
