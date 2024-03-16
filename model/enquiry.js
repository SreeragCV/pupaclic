const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    teams: [
      {
        name: {
          type: String,
          required: true,
        },
        status: {
          type: String,
          required: true,
        },
        notes: {
          type: String,
          required: true,
        },
        preference: {
          type: String,
          enum: ["primary", "secondary"],
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const Enquiry = mongoose.model("Enquiry", enquirySchema);

module.exports = Enquiry;
