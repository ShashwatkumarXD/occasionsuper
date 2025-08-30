const vendorRegisterModel = require("../models/vendorRegister");
// const { createError } = require("../utils/error");
const logger = require("../utils/logger");

const vendorRegisterForm = async (req, res, next) => {
    try {
        // ✅ Use validated and sanitized data from middleware
        const vendorData = req.validatedData;
        
        // ✅ Check if vendor already exists (Business Logic)
        const existingVendor = await vendorRegisterModel.findOne({ 
            email: vendorData.email 
        });
        
        if (existingVendor) {
            return res.status(409).json({
                success: false,
                message: "Vendor with this email already exists!"
            });
        }

        // ✅ Create new vendor with additional business data
        const vendor = new vendorRegisterModel({
            ...vendorData,
            documents: vendorData.documents || {},
            bankDetails: vendorData.bankDetails || {},
            status: "pending"
        });
        
        await vendor.save();

        // ✅ Log successful registration
        logger.info(`Vendor registered successfully: ${vendor.userId}`, {
            userId: vendor.userId,
            email: vendor.email,
            businessName: vendor.businessName
        });

        // ✅ Send success response
        res.status(201).json({
            success: true,
            message: "Vendor registered successfully",
            data: {
                userId: vendor.userId,
                email: vendor.email,
                businessName: vendor.businessName,
                status: vendor.status
            }
        });

    } catch (error) {
        // ✅ Log error for debugging
        logger.error("Vendor registration failed", {
            error: error.message,
            stack: error.stack,
            vendorData: req.body
        });
        
        // ✅ Handle specific error types
        if (error.name === "ValidationError") {
            return res.status(400).json({
                success: false,
                message: "Validation Failed",
                errors: Object.values(error.errors).map(err => err.message)
            });
        }
        
        if (error.code === 11000) {
            return res.status(409).json({
                success: false,
                message: "Duplicate entry found"
            });
        }
        
        if (error.name === "MongooseError") {
            return res.status(400).json({
                success: false,
                message: "Invalid Data",
                error: error.message
            });
        }
        
        // ✅ Generic error response
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

module.exports = {
    vendorRegisterForm
};
