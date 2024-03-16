const express = require("express");
const { verifyUserToken } = require("../middleware/authorization");
const { createEnquiry } = require("../controller/enquiryController");
const router = express.Router();

router.post("/enquiry", verifyUserToken, createEnquiry);

module.exports = router;