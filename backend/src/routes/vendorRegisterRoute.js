const express = require("express");
const vendorRegisterRoute = express.Router();

const { vendorRegistrationMiddleware } = require("../middlewares/vendorMiddleware");
const { vendorRegisterForm, getApprovedVendors } = require("../controllers/vendorRegister.js");

// Flow: Request → Middleware → Controller 
vendorRegisterRoute.post("/register", vendorRegistrationMiddleware, vendorRegisterForm);
vendorRegisterRoute.get("/approved", getApprovedVendors);

module.exports = {
    vendorRegisterRoute
};