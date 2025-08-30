const Joi = require("joi");

// Pure validation function - no Express logic
const validateVendorRegistration = (data) => {
    const schema = Joi.object({
        businessName: Joi.string().min(2).max(100).required(),
        ownerName: Joi.string().min(2).max(50).required(),
        email: Joi.string().email().required(),
        phone: Joi.string().pattern(/[1-9][\d]{0,15}$/).required(),
        city: Joi.string().min(2).max(50).required(),
        serviceArea: Joi.string().required(),
        socialMedia: Joi.string().optional(), // ✅ Add this
        categories: Joi.array().items(Joi.string()).min(1).required(),
        images: Joi.array().optional(), // ✅ Add this
        videos: Joi.array().optional(), // ✅ Add this
        packages: Joi.array().items(Joi.object({ // ✅ Fix this
            title: Joi.string().required(),
            price: Joi.string().required(),
            description: Joi.string().required(),
            inclusions: Joi.string().optional()
        })).optional(),
        documents: Joi.object({
            gst: Joi.array().optional(), // ✅ Allow any type (files)
            businessProof: Joi.array().optional(),
            idProof: Joi.array().optional(),
        }).optional(),
        bankDetails: Joi.object({
            accountHolder: Joi.string().optional(),
            accountNumber: Joi.string().optional(),
            ifsc: Joi.string().optional(),
        }).optional()
    });

    return schema.validate(data);
};

module.exports = {
    validateVendorRegistration
};