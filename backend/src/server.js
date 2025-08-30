// import express from "express";
// import cors from "cors";

// const app = express();
// app.use(express.json());

// // ✅ Enable CORS
// app.use(
//   cors({
//     origin: "http://localhost:5173", // allow your React app
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );

// app.post("/api/vendors", (req, res) => {
//   console.log(req.body);
//   res.json({ message: "Vendor registered successfully ✅" });
// });

// app.listen(5000, () => {
//   console.log("Server running on http://localhost:5000");
// });

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const {vendorRegisterRoute} = require("./routes/vendorRegisterRoute");
require("dotenv").config();

const app = express();
app.use(helmet());

const connectDB = require("./config/db");
connectDB()
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Database connection failed:", error.message);
        process.exit(1);
    });


const PORT = process.env.PORT || 5000;

const allowedOrigins = [
    'http://localhost:5173',
    'https://occasionsuper.in',
    process.env.CLIENT_URL
].filter(Boolean);

app.use(cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (res,req) => {
    res.send("Ocassionsuper backend is running");
})

app.listen(PORT, () => {
    console.log("Ocassionsuper backend is running 🚀");
    console.log(`Server is running on port ${PORT}`);
});

app.use("/api/register/vendor", vendorRegisterRoute);

module.exports = app;

