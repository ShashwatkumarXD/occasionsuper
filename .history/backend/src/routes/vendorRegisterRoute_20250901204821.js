const express = require("express");
const vendorRegisterRoute = express.Router();

const { vendorRegistrationMiddleware } = require("../middlewares/vendorMiddleware");
const { vendorRegisterForm } = require("../controllers/vendorRegister.js");

// Flow: Request → Middleware → Controller 
vendorRegisterRoute.post("/register", vendorRegistrationMiddleware, vendorRegisterForm);

module.exports = {
    vendorRegisterRoute
};