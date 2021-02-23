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

app.all("*", (req, res, next) => {
  next(
    res.status(404).json({
      messsage: `${req.originalUrl} is not available`,
    })
  );
});

app.use(errorHandler);
