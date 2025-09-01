const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const {vendorRegisterRoute} = require("./routes/vendorRegisterRoute");
require("dotenv").config();

const app = express();
app.use(helmet());

const connectDB = require("./config/db");

// Connect to database
connectDB()
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Database connection failed:", error.message);
        console.log("Server will start without database connection");
    });

const PORT = process.env.PORT || 3000;

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

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).json({
        success: false,
        message: 'Internal Server Error',
        error: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
    });
});

app.get("/", (req,res) => {
    res.send("Ocassionsuper backend is running");
})

app.use("/api/register/vendor", vendorRegisterRoute); 

app.listen(PORT, () => {
    console.log("Ocassionsuper backend is running 🚀");
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

