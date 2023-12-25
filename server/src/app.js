const express = require("express");
const morgan = require("morgan");
const app = express();
const createError = require("http-errors");
const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");
const userRouter = require("./routers/user.router");
const seedRouter = require("./routers/seed.router");
const { errorResponse } = require("./controllers/response.controller");

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
app.use("/api/user", userRouter);
app.use("/api/seed", seedRouter);

// Client error handling : When access not create route
app.use((req, res, next) => {
  next(createError(404, "route not found"));
});

// Server error handling: Finally error/last error
app.use((err, req, res, next) => {
  return errorResponse(res, {
    statusCode: err.status,
    message: err.message,
  });
});

module.exports = app;
