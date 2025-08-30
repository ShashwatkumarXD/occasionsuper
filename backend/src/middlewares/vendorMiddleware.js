const { validateVendorRegistration } = require("../validators/vendorRegister");

const vendorRegistrationMiddleware = (req, res, next) => {
    // 1. Use validator to check data format
    const { error, value } = validateVendorRegistration(req.body);
    
    // 2. Handle validation errors
    if (error) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: error.details.map(detail => detail.message)
        });
    }
    
    // 3. Sanitize data (clean and format)
    const sanitizedData = {
        ...value,
        email: value.email.toLowerCase().trim(),
        businessName: value.businessName.trim(),
        ownerName: value.ownerName.trim(),
        phone: value.phone.replace(/\s+/g, ""),
        city: value.city.trim(),
        serviceArea: value.serviceArea.trim(),
        categories: value.categories.map(cat => cat.trim()),
        packages: value.packages || []
    };
    
    // 4. Set up data for controller
    req.validatedData = sanitizedData;
    
    // 5. Continue to controller
    next();
};

module.exports = {
    vendorRegistrationMiddleware
};
