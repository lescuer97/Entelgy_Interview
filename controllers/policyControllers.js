const axios = require("axios");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const { range } = require("../utils/utilFunction");

//grabs the policies from the client
exports.policyAPIRequest = catchAsync(async (req, res, next) => {
  const query = await axios({
    method: "get",
    url: "https://dare-nodejs-assessment.herokuapp.com/api/policies",
    headers: {
      authorization: req.headers.authorization,
    },
    data: {
      client_id: req.body.client_id,
      client_secret: req.body.client_secret,
    },
  }).then((res) => {
    return res.data;
  });
  req.policy = query;
  next();
});
exports.policy = (req, res, next) => {
  var finalValue = range(req.policy, req.query.limit);
  res.status(200).json(finalValue);
};
