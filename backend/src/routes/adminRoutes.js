const express = require("express");
const router = express.Router();

const { createVendorUser, approveVendor, setUserActiveState } = require("../controllers/admin");

router.post("/vendors/approve", approveVendor);
router.post("/users/create-vendor", createVendorUser);
router.patch("/users/:user_id/active", setUserActiveState);

module.exports = router;


