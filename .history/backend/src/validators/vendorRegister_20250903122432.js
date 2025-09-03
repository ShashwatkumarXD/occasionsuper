const Joi = require("joi");

// Pure validation function - no Express logic
const validateVendorRegistration = (data) => {
    console.log("Validator: Input data:", data);
    
    const schema = Joi.object({
        businessName: Joi.string().min(2).max(100).required(),
        ownerName: Joi.string().min(2).max(50).required(),
        email: Joi.string().email().required(),
        phone: Joi.string().pattern(/^\d{7,15}$/).required(),
        city: Joi.string().min(2).max(50).required(),
        serviceArea: Joi.string().required(),
        socialMedia: Joi.string().allow("", null),
        categories: Joi.array().items(Joi.string()).min(1).required(),
        images: Joi.array().optional().allow(null),
        videos: Joi.array().optional().allow(null),
        packages: Joi.array().items(Joi.object({
            title: Joi.string().required(),
            price: Joi.string().required(),
            description: Joi.string().required(),
            inclusions: Joi.string().optional().allow("")
        })).optional(),
        documents: Joi.object({
            gst: Joi.array().optional().allow(null),
            businessProof: Joi.array().optional().allow(null),
            idProof: Joi.array().optional().allow(null),
        }).optional().allow(null),
        bankDetails: Joi.object({
            accountHolder: Joi.string().optional().allow("", null),
            accountNumber: Joi.string().optional().allow("", null),
            ifsc: Joi.string().optional().allow("", null),
        }).optional().allow(null)
    });

    const result = schema.validate(data);
    console.log("Validator: Validation result:", { 
        error: result.error?.message, 
        value: result.value 
    });
    
    return result;
};

module.exports = {
    validateVendorRegistration
};