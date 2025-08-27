const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config();

const authRoutes = require("./routes/authRoutes");
const vendorRoutes = require("./routes/vendorRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("OccasionSuper API");
});

app.use("/api/auth", authRoutes);
app.use("/api/vendors", vendorRoutes);

const PORT = process.env.PORT || 4000;

async function start() {
	try {
		if (!process.env.DATABASE_URL) {
			throw new Error("DATABASE_URL is not set in environment");
		}
		if (!process.env.JWT_SECRET) {
			throw new Error("JWT_SECRET is not set in environment");
		}
		await mongoose.connect(process.env.DATABASE_URL);
		console.log("MongoDB connected");
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	} catch (err) {
		console.error("Failed to start server:", err);
		process.exit(1);
	}
}

start();