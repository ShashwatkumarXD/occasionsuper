const { body, param } = require("express-validator");

const upsertVendorValidator = [
	body("images").optional().isArray().withMessage("images must be an array of URLs"),
	body("images.*").optional().isString().withMessage("image url must be a string"),
	body("name").notEmpty().withMessage("name is required"),
	body("email").isEmail().withMessage("valid email is required"),
	body("category").notEmpty().withMessage("category is required"),
	body("state").notEmpty().withMessage("state is required"),
	body("description").notEmpty().withMessage("description is required"),
	body("price").isFloat({ min: 0 }).withMessage("price must be a positive number"),
];

const verifyVendorValidator = [
	body("vendorUserId").notEmpty().withMessage("vendorUserId is required"),
	body("verified").isBoolean().withMessage("verified must be boolean"),
];

const getVerifiedVendorValidator = [
	param("userId").notEmpty().withMessage("userId is required"),
];

module.exports = { upsertVendorValidator, verifyVendorValidator, getVerifiedVendorValidator };


