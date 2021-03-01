const axios = require("axios");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const { range, idCompare } = require("../utils/utilFunction");

//grabs the policies from the client
exports.policyAPIRequest = catchAsync(async (req, res, next) => {
  const query = await axios({
    method: "get",
    url: "https://dare-nodejs-assessment.herokuapp.com/api/policies",
    headers: {
      authorization: req.auth,
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

// return all policies
exports.policy = (req, res, next) => {
  let filteredValue = range(req.policy, req.query.limit);

  let finalValue = filteredValue.map((obj) => {
    delete obj["clientId"];
    return obj;
  });
  res.status(200).json(finalValue);
};

// returns the policy that matches the provided ID
exports.policyId = (req, res, next) => {
  let finalValue = idCompare(req.policy, req.params.id).filter(
    (obj) => obj.installmentPayment === true && delete obj["clientId"]
  );

  res.status(200).json(finalValue);
};
