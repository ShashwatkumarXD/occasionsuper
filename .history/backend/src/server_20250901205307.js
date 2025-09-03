import express from "express";
import cors from "cors";
const helmet = require("helmet");
const {vendorRegisterRoute} = require("./routes/vendorRegisterRoute");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(helmet());

const connectDB = require("./config/db");

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


// ✅ Enable CORS
app.use(cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.get("/api/cities", async (req, res) => {
  const query = req.query.q;
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(
        query
      )}&countrycodes=in&format=json&limit=5`,
      {
        headers: {
          "User-Agent": "EventPlannerApp/1.0 (youremail@example.com)",
          "Accept-Language": "en",
        },
      }
    );

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Nominatim fetch failed:", err);
    res.status(500).json({ error: "Failed to fetch cities" });
  }
});


app.post("/api/vendors", (req, res) => {
  console.log(req.body);
  res.json({ message: "Vendor registered successfully ✅" });
});

app.listen(PORT, () => {
    console.log("Ocassionsuper backend is running 🚀");
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;