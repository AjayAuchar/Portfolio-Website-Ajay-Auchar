require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.set("strictQuery", false);

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:3000", // Local Next.js frontend
      "https://your-frontend.onrender.com", // Replace with your actual Render frontend URL
    ],
    credentials: true,
  }),
);

app.use(express.json());

// Routes
const user_router = require("./Routes/users");
app.use("/users", user_router);

// Health check route (optional but recommended)
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend is running 🚀",
  });
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
  });
