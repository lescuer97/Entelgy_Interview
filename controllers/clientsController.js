const axios = require("axios");
const catchAsync = require("../utils/catchAsync");
const {
  idCompare,
  searchClientIdinPolicyArray,
  addPoliciesToClients,
} = require("../utils/utilFunction");

// grabs all the clients from the api
exports.clientAPIRequest = catchAsync(async (req, res, next) => {
  const query = await axios({
    method: "get",
    url: "https://dare-nodejs-assessment.herokuapp.com/api/clients",
    headers: {
      authorization: req.auth,
      // "If-None-Match": req.headers["If-None-Match"],
    },
    data: {
      client_id: req.body.client_id,
      client_secret: req.body.client_secret,
    },
  }).then((res) => {
    return res.data;
  });

  req.clients = query;
  next();
});

exports.client = (req, res, next) => {
  const finalResult = addPoliciesToClients(req.clients, req.policy);
  res.status(200).json(finalResult);
};

exports.clientId = (req, res, next) => {
  const interValue = addPoliciesToClients(req.clients, req.policy);
  let finalValue = idCompare(interValue, req.params.id);
  res.status(200).json(finalValue);
};

exports.clientPolicy = (req, res, next) => {
  let finalValue = searchClientIdinPolicyArray(req.policy, req.params.id);

  res.status(200).json(finalValue);
};
