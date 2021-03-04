const axios = require("axios");
const NodeCache = require("node-cache");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const { range, idCompare } = require("../utils/utilFunction");

var policyCache = new NodeCache();
//grabs the policies from the client
exports.policyAPIRequest = catchAsync(async (req, res, next) => {
  // checks if etag exists else returns empty string
  const cache = (function(a) {
    if (a) {
      return a;
    } else {
      return { etag: "" };
    }
  })(policyCache.get("policy"));

  const query = await axios({
    method: "get",
    url: "https://dare-nodejs-assessment.herokuapp.com/api/policies",
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
      policyCache.set("policy", { etag: res.headers.etag, values: res.data });
      return res.data;
    })
    .catch((err) => {
      // this checks that the response was 304 and if it was it sends the cached values to the next controllers
      if (err.response.status && policyCache.get("policy")) {
        return policyCache.get("policy").values;
      } else {
        return next(err);
      }
    });

  req.policy = query;
  next();
});

// return all policies
exports.policy = (req, res, next) => {
  let finalValue = range(req.policy, req.query.limit).filter(
    (obj) => obj.installmentPayment === true && delete obj["clientId"]
  );

  res.status(200).json(finalValue);
};

// returns the policy that matches the provided ID
exports.policyId = (req, res, next) => {
  let finalValue = idCompare(req.policy, req.params.id).filter(
    (obj) => obj.installmentPayment === true && delete obj["clientId"]
  );

  res.status(200).json(finalValue);
};
