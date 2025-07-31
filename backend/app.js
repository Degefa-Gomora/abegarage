require("dotenv").config();
const express = require("express");
const path = require("path");
// require("dotenv").config();
const sanitize = require("sanitize");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8000;
const router = require("./routes");

// Middleware
app.use(cors({ origin: "*", optionsSuccessStatus: 200 }));
app.use(express.json());
app.use(cookieParser());
app.use(sanitize.middleware);

// API routes
app.use("/api", router);

// ✅ Serve Vite static frontend
app.use(express.static(path.join(__dirname, "dist")));

// ✅ SPA fallback for React Router
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start server
app.listen(port, () => {
  console.log(`✅ Server running on port: ${port}`);
});

module.exports = app;
