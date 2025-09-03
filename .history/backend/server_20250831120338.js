import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());

// ✅ Enable CORS
app.use(
  cors({
    origin: "http://localhost:5173", // allow your React app
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/api/cities", async (req, res) => {
  const query = req.query.q;
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(
        query
      )}&format=json&limit=5`,
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

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
