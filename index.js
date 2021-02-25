const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const session = require("express-session");

dotenv.config({ path: "./.env" });

// routes for the API
const clientRouter = require("./routers/clientsRouter");
const policyRouter = require("./routers/policiesRouter");

// controller for api
const { insuranceApiLogin } = require("./controllers/authController");
const errorHandler = require("./controllers/errorController");
const AppError = require("./utils/appError");

// Start express app
const app = express();

app.use(express.json());

// logging for development
app.use(morgan("dev"));

//TODO needs To be configured in the future
app.use(cors());

// app.post("/api/v1/login", insuranceApiLogin);

app.use("/api/policies", policyRouter);
app.use("/api/clients", clientRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`This Route: ${req.originalUrl} is not allowed`, 404));
});

app.use(errorHandler);

app.listen(3000, () => {
  console.log("listening on port 3000");
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on("SIGTERM", () => {
  console.log("SIGTERM RECEIVED. Shutting down gracefully");
  server.close(() => {
    console.log("Process terminated!");
  });
});
