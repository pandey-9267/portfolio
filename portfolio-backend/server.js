import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

console.log(process.env.MONGO_URI);

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Portfolio Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});