const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

// Start express app
const app = express();

// logging for development
app.use(morgan("dev"));

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
