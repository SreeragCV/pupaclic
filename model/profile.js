const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    profile_info: {
      gender: {
        type: String,
        required: true,
      },
      age: {
        type: Number,
        required: true,
      },
      place: {
        type: String,
        required: true,
      },
      education: {
        type: String,
        required: true,
      },
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
