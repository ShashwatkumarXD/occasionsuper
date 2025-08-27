const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const User = require("../models/User");

const JWT_EXPIRES_IN = "7d";

exports.register = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	try {
		const {
			firstName,
			lastName,
			middleName,
			email,
			phoneNumber,
			whatsAppNumber,
			address1,
			address2,
			address3,
			address4,
			password,
			termsAccepted,
			role, // expected to be 'vendor' per validator; enforced as vendor
		} = req.body;

		const existing = await User.findOne({ email });
		if (existing) {
			return res.status(409).json({ message: "Email already registered" });
		}

		const salt = await bcrypt.genSalt(10);
		const passwordHash = await bcrypt.hash(password, salt);

		const user = await User.create({
			firstName,
			lastName,
			middleName,
			email,
			phoneNumber,
			whatsAppNumber,
			address1,
			address2,
			address3,
			address4,
			passwordHash,
			termsAccepted: termsAccepted === true || termsAccepted === "true",
			role: "vendor",
		});

		const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
			expiresIn: JWT_EXPIRES_IN,
		});

		return res.status(201).json({
			message: "Registration successful",
			user: {
				id: user._id,
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
				role: user.role,
			},
			token,
		});
	} catch (error) {
		return res.status(500).json({ message: "Server error", error: error.message });
	}
};

exports.login = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	try {
		const { email, password, role } = req.body;
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(401).json({ message: "Invalid credentials" });
		}

		const isMatch = await bcrypt.compare(password, user.passwordHash);
		if (!isMatch) {
			return res.status(401).json({ message: "Invalid credentials" });
		}

		// Verify requested role matches user's role
		if (role !== user.role) {
			return res.status(403).json({ message: "Role mismatch" });
		}

		const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
			expiresIn: JWT_EXPIRES_IN,
		});

		return res.json({
			message: "Login successful",
			user: {
				id: user._id,
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
				role: user.role,
			},
			token,
		});
	} catch (error) {
		return res.status(500).json({ message: "Server error", error: error.message });
	}
};


