const { validateVendorRegistration } = require("../validators/vendorRegister");

const vendorRegistrationMiddleware = (req, res, next) => {
    console.log("Middleware: Received request body:", req.body);

    // 0. Pre-sanitize raw input BEFORE validation
    const preSanitized = {
        ...req.body,
        email: typeof req.body.email === 'string' ? req.body.email.trim().toLowerCase() : req.body.email,
        businessName: typeof req.body.businessName === 'string' ? req.body.businessName.trim() : req.body.businessName,
        ownerName: typeof req.body.ownerName === 'string' ? req.body.ownerName.trim() : req.body.ownerName,
        phone: typeof req.body.phone === 'string' ? req.body.phone.replace(/\D/g, "") : req.body.phone,
        city: typeof req.body.city === 'string' ? req.body.city.trim() : req.body.city,
        serviceArea: typeof req.body.serviceArea === 'string' ? req.body.serviceArea.trim() : req.body.serviceArea,
        socialMedia: typeof req.body.socialMedia === 'string' ? req.body.socialMedia.trim() : req.body.socialMedia,
        categories: Array.isArray(req.body.categories) ? req.body.categories.map((c) => (typeof c === 'string' ? c.trim() : c)) : req.body.categories,
    };

    // 1. Use validator to check data format
    const { error, value } = validateVendorRegistration(preSanitized);

    console.log("Middleware: Validation result:", { error: error?.message, value });

    // 2. Handle validation errors
    if (error) {
        console.log("Middleware: Validation failed:", error.details);
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: error.details.map(detail => detail.message)
        });
    }

    // 3. Sanitize data (clean and format) for persistence
    const sanitizedData = {
        ...value,
        email: value.email.toLowerCase().trim(),
        businessName: value.businessName.trim(),
        ownerName: value.ownerName.trim(),
        phone: value.phone.replace(/\s+/g, ""),
        city: value.city.trim(),
        serviceArea: value.serviceArea.trim(),
        socialMedia: value.socialMedia.trim(),
        categories: value.categories.map(cat => cat.trim()),
        images: value.images || null,
        videos: value.videos || null,
        packages: value.packages || [],
        documents: value.documents || {
            gst: null,
            businessProof: null,
            idProof: null
        },
        bankDetails: value.bankDetails || {
            accountHolder: null,
            accountNumber: null,
            ifsc: null
        }
    };

    console.log("Middleware: Sanitized data:", sanitizedData);

    // 4. Set up data for controller
    req.validatedData = sanitizedData;

    // 5. Continue to controller
    next();
};

module.exports = {
    vendorRegistrationMiddleware
};
