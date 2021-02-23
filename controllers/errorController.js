const AppError = require("../utils/appError");

const handleAxiosError = (error) => {
  //   console.log(error.response.data);
  return new AppError(
    error.response.data.message,
    error.response.data.statusCode
  );
};

const sendError = (err, req, res) => {
  res.status(err.statusCode).json({
    code: err.statusCode,
    message: err.message,
  });
};

module.exports = (err, req, res, next) => {
  // console.log(err.stack);

  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  let error = { ...err };

  if (error.isAxiosError) error = handleAxiosError(error);
  sendError(error, req, res);
};
