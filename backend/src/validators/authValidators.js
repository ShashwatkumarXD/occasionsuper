const { body } = require("express-validator");

const registerValidator = [
	body("firstName").notEmpty().withMessage("First name is required"),
	body("lastName").notEmpty().withMessage("Last name is required"),
	body("middleName").optional().isString().withMessage("Middle name must be a string"),
	body("email").isEmail().withMessage("Valid email is required"),
	body("phoneNumber").notEmpty().withMessage("Phone number is required"),
	body("whatsAppNumber").optional().isString().withMessage("WhatsApp number must be a string"),
	body("address1").notEmpty().withMessage("Address 1 is required"),
	body("address2").notEmpty().withMessage("Address 2 is required"),
	body("address3").notEmpty().withMessage("Address 3 is required"),
	body("address4").optional().isString().withMessage("Address 4 must be a string"),
	body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
	body("confirmPassword").custom((value, { req }) => {
		if (value !== req.body.password) {
			throw new Error("Passwords do not match");
		}
		return true;
	}),
	body("termsAccepted").custom((value) => {
		if (value === true || value === "true") return true;
		throw new Error("Terms & conditions must be accepted");
	}),
	body("role").custom((value, { req }) => {
		// Only admin can create vendor; route enforces admin. Role must be 'vendor'.
		if (value && value !== "vendor") {
			throw new Error("Only vendor registration is allowed on this endpoint");
		}
		return true;
	}),
];

const loginValidator = [
	body("email").isEmail().withMessage("Valid email is required"),
	body("password").notEmpty().withMessage("Password is required"),
	body("role").notEmpty().isIn(["admin", "vendor", "customer"]).withMessage("Role is required and must be one of admin, vendor, customer"),
];

module.exports = { registerValidator, loginValidator };


