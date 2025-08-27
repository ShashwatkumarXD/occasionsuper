const express = require("express");
const router = express.Router();

const { registerValidator, loginValidator } = require("../validators/authValidators");
const { register, login } = require("../controllers/authController");
const { authenticate, authorizeRoles } = require("../middlewares/auth");

// Only admins can register vendors
router.post("/register", authenticate, authorizeRoles("admin"), registerValidator, register);
router.post("/login", loginValidator, login);

module.exports = router;


