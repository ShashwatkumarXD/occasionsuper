const mongoose = require("mongoose");

const VendorRegister = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId,
    },

    userId: {
        type: Number,
        unique: true,
        default: async function(){
            try {
                const lastUser = await this.model("VendorRegister").findOne({}, {}, { sort: { userId: -1 } });
                return lastUser ? lastUser.userId + 1 : 1;
            } catch (error) {
                throw new Error("Failed to generate userId");
            }
        }
    },

    businessName: {
        type: String,
        required: true,
    },
    ownerName: {
        type: String,
        required: true,
    },
    
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            'Please enter a valid email address'
        ],
        lowercase: true,
        trim: true
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        trim: true,
        match: [/[1-9][\d]{0,15}$/, 'Please enter a valid phone number'],
        set: function(phone) {
            return phone.replace(/\s+/g, ''); // Remove spaces
        }
    },
    
    city: {
        type: String,
        required: true
    },
    serviceArea: {
        type: String,
        required: true
    },
    
    categories: {
        type: [String],
        required: true
    },
    packages: {
        type: [String],
        required: false,
    },
    
    documents: {
        type: Object,
        required: false,
    },

    bankDetails: {
        type: Object,
        required: false,
    },

    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected', 'suspended'],
        default: 'pending'
    },
    verificationStatus: {
        emailVerified: {
            type: Boolean,
            default: false
        },
        phoneVerified: {
            type: Boolean,
            default: false
        },
        documentsVerified: {
            type: Boolean,
            default: false
        }
    },

    isActive: {
        type: Boolean,
        default: true
    }
    
}, { timestamps: true,
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
});

// VendorRegister.index({email: 1}, {unique: true});
// VendorRegister.index({status: 1 , isActive: 1});
// VendorRegister.index({city: 1, categories: 1});

const VendorRegisterModel = mongoose.model("VendorRegister", VendorRegister);

module.exports = VendorRegisterModel;