const express = require("express");
const { createProfile } = require("../controller/profileController");
const { verifyUserToken } = require("../middleware/authorization");
const router = express.Router();

router.post("/profile/:id", verifyUserToken, createProfile);

module.exports = router