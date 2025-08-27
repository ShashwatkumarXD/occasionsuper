const { validationResult } = require("express-validator");
const Vendor = require("../models/Vendor");

// Vendor submits or updates their own profile (pending verification)
exports.upsertMyVendorProfile = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	try {
		const userId = req.user._id;
		if (req.user.role !== "vendor") {
			return res.status(403).json({ message: "Only vendors can submit profiles" });
		}

		const { images, name, email, category, state, description, price } = req.body;

		const update = {
			images: images || [],
			name,
			email,
			category,
			state,
			description,
			price,
			verified_vendor: false,
			verifiedBy: undefined,
			verifiedAt: undefined,
		};

		const vendor = await Vendor.findOneAndUpdate(
			{ user: userId },
			{ $set: update, $setOnInsert: { user: userId } },
			{ new: true, upsert: true }
		);

		return res.status(200).json({ message: "Vendor profile submitted", vendor });
	} catch (error) {
		return res.status(500).json({ message: "Server error", error: error.message });
	}
};

// Admin verifies a vendor profile
exports.verifyVendor = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	try {
		const { vendorUserId, verified } = req.body; // admin chooses approve/revoke
		const vendor = await Vendor.findOne({ user: vendorUserId });
		if (!vendor) return res.status(404).json({ message: "Vendor profile not found" });

		vendor.verified_vendor = Boolean(verified);
		vendor.verifiedBy = verified ? req.user._id : undefined;
		vendor.verifiedAt = verified ? new Date() : undefined;
		await vendor.save();

		return res.status(200).json({ message: verified ? "Vendor verified" : "Vendor unverified", vendor });
	} catch (error) {
		return res.status(500).json({ message: "Server error", error: error.message });
	}
};

// Public: get vendor profile by user id (only if verified)
exports.getVerifiedVendorByUser = async (req, res) => {
	try {
		const { userId } = req.params;
		const vendor = await Vendor.findOne({ user: userId, verified_vendor: true });
		if (!vendor) return res.status(404).json({ message: "Verified vendor not found" });
		return res.json({ vendor });
	} catch (error) {
		return res.status(500).json({ message: "Server error", error: error.message });
	}
};


