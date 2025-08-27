const express = require("express");
const router = express.Router();

const { authenticate, authorizeRoles } = require("../middlewares/auth");
const { upsertVendorValidator, verifyVendorValidator, getVerifiedVendorValidator } = require("../validators/vendorValidators");
const { upsertMyVendorProfile, verifyVendor, getVerifiedVendorByUser } = require("../controllers/vendorController");

// Vendor creates/updates their profile (requires vendor role)
router.post("/me", authenticate, authorizeRoles("vendor"), upsertVendorValidator, upsertMyVendorProfile);

// Admin verifies or un-verifies a vendor profile
router.post("/verify", authenticate, authorizeRoles("admin"), verifyVendorValidator, verifyVendor);

// Public: get verified vendor profile by user id
router.get("/:userId", getVerifiedVendorValidator, getVerifiedVendorByUser);

module.exports = router;


