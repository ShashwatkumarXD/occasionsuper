const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema(
	{
		user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
		images: { type: [String], default: [] },
		name: { type: String, required: true, trim: true },
		email: { type: String, required: true, lowercase: true, trim: true },
		category: { type: String, required: true, trim: true },
		state: { type: String, required: true, trim: true },
		description: { type: String, required: true, trim: true },
		price: { type: Number, required: true, min: 0 },
		verified_vendor: { type: Boolean, default: false },
		verifiedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
		verifiedAt: { type: Date },
	},
	{ timestamps: true }
);

vendorSchema.index({ user: 1 }, { unique: true });

module.exports = mongoose.model("Vendor", vendorSchema);


