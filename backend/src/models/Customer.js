const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
	{
		user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
		name: { type: String, required: true, trim: true },
		email: { type: String, required: true, lowercase: true, trim: true },
		// extend with additional customer-specific fields as needed
	},
	{ timestamps: true }
);

customerSchema.index({ user: 1 }, { unique: true });

module.exports = mongoose.model("Customer", customerSchema);


