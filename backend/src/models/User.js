const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		firstName: { type: String, required: true, trim: true },
		lastName: { type: String, required: true, trim: true },
		middleName: { type: String, trim: true },
		email: { type: String, required: true, unique: true, lowercase: true, trim: true },
		phoneNumber: { type: String, required: true, trim: true },
		whatsAppNumber: { type: String, trim: true },
		address1: { type: String, required: true, trim: true }, // State, region
		address2: { type: String, required: true, trim: true }, // street
		address3: { type: String, required: true, trim: true }, // block, office no., house no.
		address4: { type: String, trim: true }, // near by (optional)
		passwordHash: { type: String, required: true },
		termsAccepted: { type: Boolean, required: true },
		role: { type: String, enum: ["admin", "vendor", "customer"], default: "customer", required: true },
	},
	{ timestamps: true }
);

userSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.model("User", userSchema);


