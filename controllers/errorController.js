const AppError = require("../utils/appError");

const handleAxiosError = (error) => {
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
  let error = err;

  if (error.isAxiosError) error = handleAxiosError(error);
  sendError(error, req, res);
};
