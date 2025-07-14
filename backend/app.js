// // const express = require("express");
// // require("dotenv").config();
// // const sanitize = require("sanitize");
// // const cookieParser = require('cookie-parser');
// // const cors = require("cors");
// // const corsOptions = {
// //   origin: "*",
// //   optionsSuccessStatus: 200,
// // };
// // const port = process.env.PORT;
// // const router = require("./routes");
// // const app = express();

// // app.use(cors(corsOptions));

// // app.use(express.json());

// // app.use(cookieParser());

// // app.use(sanitize.middleware);

// // app.use(router);

// // app.listen(port, () => {
// //   console.log(`Server running on port: ${port}`);
// // });

// // module.exports = app;


// const express = require("express");
// const path = require("path");
// require("dotenv").config();
// const sanitize = require("sanitize");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const router = require("./routes");

// const app = express();
// const port = process.env.PORT || 8000;

// // CORS setup
// const corsOptions = {
//   origin: "*", // Replace with your frontend domain for security in production
//   optionsSuccessStatus: 200,
// };
// app.use(cors(corsOptions));

// // Middleware
// app.use(express.json());
// app.use(cookieParser());
// app.use(sanitize.middleware);

// // API routes
// app.use("/api", router); // Use "/api" prefix to avoid frontend route conflicts

// // --- Serve Static Frontend from 'dist' folder ---
// app.use(express.static(path.join(__dirname, "dist")));

// // --- SPA Fallback: Serve index.html for all unmatched routes ---
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "dist", "index.html"));
// });

// // Start server
// app.listen(port, () => {
//   console.log(`✅ Server running on port: ${port}`);
// });

// module.exports = app;


const express = require("express");
const path = require("path");
require("dotenv").config();
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

