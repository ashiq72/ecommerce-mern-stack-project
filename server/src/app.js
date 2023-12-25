const express = require("express");
const morgan = require("morgan");
const app = express();
const createError = require("http-errors");
const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");
const userRouter = require("./routers/user.router");
const seedRouter = require("./routers/seed.router");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minutes
  limit: 5,
  message: "To many request",
});

app.get("/", (req, res) => {
  res.send("Home route");
});

// Client error handling : When access not create route
app.use("/api/user", userRouter);
app.use("/api/seed", seedRouter);

// Server error handling: Finally error/last error
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

module.exports = app;
