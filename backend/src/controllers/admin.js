const mongoose = require("mongoose");
const User = require("../models/user");
const Vendor = require("../models/vendorRegister");

const createVendorUser = async (req, res) => {
    try {
        const { email, password, phone_number, vendor_id } = req.body;

        if (!email || !password || !vendor_id) {
            return res.status(400).json({ success: false, message: "email, password and vendor_id are required" });
        }

        if (!mongoose.isValidObjectId(vendor_id)) {
            return res.status(400).json({ success: false, message: "Invalid vendor_id" });
        }

        const vendor = await Vendor.findById(vendor_id);
        if (!vendor) {
            return res.status(404).json({ success: false, message: "Vendor not found" });
        }
        if (vendor.status !== "approved") {
            return res.status(400).json({ success: false, message: "Vendor is not approved" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ success: false, message: "User with this email already exists" });
        }

        const user = new User({
            role: "vendor",
            email,
            password,
            phone_number: phone_number || null,
            vendor_id: vendor._id,
            is_active: true,
        });
        await user.save();

        return res.status(201).json({ success: true, message: "Vendor user created successfully", data: { id: user._id, email: user.email, role: user.role, vendor_id: user.vendor_id } });
    } catch (error) {
        console.error("createVendorUser error:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

const approveVendor = async (req, res) => {
    try {
        const { vendor_id } = req.body;
        if (!vendor_id || !mongoose.isValidObjectId(vendor_id)) {
            return res.status(400).json({ success: false, message: "Valid vendor_id is required" });
        }

        const vendor = await Vendor.findById(vendor_id);
        if (!vendor) {
            return res.status(404).json({ success: false, message: "Vendor not found" });
        }

        vendor.status = "approved";
        await vendor.save();

        return res.status(200).json({ success: true, message: "Vendor approved", data: { vendor_id: vendor._id } });
    } catch (error) {
        console.error("approveVendor error:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

const setUserActiveState = async (req, res) => {
    try {
        const { user_id } = req.params;
        const { is_active } = req.body;

        if (!mongoose.isValidObjectId(user_id)) {
            return res.status(400).json({ success: false, message: "Invalid user_id" });
        }
        if (typeof is_active !== "boolean") {
            return res.status(400).json({ success: false, message: "is_active must be boolean" });
        }

        const user = await User.findByIdAndUpdate(user_id, { is_active }, { new: true });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        return res.status(200).json({ success: true, message: "User state updated", data: { id: user._id, is_active: user.is_active } });
    } catch (error) {
        console.error("setUserActiveState error:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

module.exports = {
    createVendorUser,
    approveVendor,
    setUserActiveState,
};


