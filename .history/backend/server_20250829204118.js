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

app.post("/api/vendors", (req, res) => {
  console.log(req.body);
  res.json({ message: "Vendor registered successfully ✅" });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
