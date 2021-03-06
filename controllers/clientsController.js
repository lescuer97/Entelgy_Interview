const axios = require("axios");
const catchAsync = require("../utils/catchAsync");
const NodeCache = require("node-cache");
const {
  idCompare,
  searchClientIdinPolicyArray,
  addPoliciesToClients,
  range,
  nameSearch,
} = require("../utils/utilFunction");

// var clientCache = new NodeCache();

var clientCache = new NodeCache();

// grabs all the clients from the api
exports.clientAPIRequest = catchAsync(async (req, res, next) => {
  // checks if etag exists else returns empty string
  const cache = (function(cache) {
    if (cache) {
      return cache;
    } else {
      return { etag: "" };
    }
  })(clientCache.get("client"));

  const query = await axios({
    method: "get",
    url: "https://dare-nodejs-assessment.herokuapp.com/api/clients",
    headers: {
      authorization: req.auth,
      "If-None-Match": cache.etag,
    },
    data: {
      client_id: req.body.client_id,
      client_secret: req.body.client_secret,
    },
  })
    .then((res) => {
      clientCache.set("client", { etag: res.headers.etag, values: res.data });
      // console.log(res.headers);
      return res.data;
    })
    .catch((err) => {
      // this checks that the response was 304 and if it was it sends the cached values to the next controllers
      if (err.response.status && clientCache.get("client")) {
        return clientCache.get("client").values;
      } else {
        return next(err);
      }
    });

  req.clients = query;
  next();
});

exports.client = (req, res, next) => {
  const interValue = nameSearch(req.clients, req.query.name);
  const rangeValue = range(interValue, req.query.limit);

  const finalResult = addPoliciesToClients(rangeValue, req.policy);
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
