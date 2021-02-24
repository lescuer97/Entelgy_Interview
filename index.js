const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

// routes for the API
const clientRouter = require("./routers/clientsRouter");
const policyRouter = require("./routers/policiesRouter");

// controller for api
const errorHandler = require("./controllers/errorController");

// Start express app
const app = express();

app.use(express.json());

// logging for development
app.use(morgan("dev"));

app.post("/api/login", login);
app.use("/api/policies", policyRouter);
app.use("/api/clients", clientRouter);

app.listen(5000, () => {
  console.log("listening on port 5000");
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
