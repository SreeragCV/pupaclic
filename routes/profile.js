const express = require("express");
const { createProfile } = require("../controller/profileController");
const { verifyUserToken } = require("../middleware/authorization");
const router = express.Router();

router.post("/:id", verifyUserToken, createProfile);

module.exports = router