const axios = require("axios").default;
const NodeCache = require("node-cache");

const catchAsync = require("../utils/catchAsync");
var authCache = new NodeCache();
// login to the api client
exports.insuranceApiLogin = catchAsync(async (req, res, next) => {
  const token = authCache.get("token");

  if (!token) {
    const request = await axios({
      method: "post",
      url: "https://dare-nodejs-assessment.herokuapp.com/api/login",
      // uses envirement variables for the login of the api
      data: {
        client_id: process.env.client_id,
        client_secret: process.env.client_secret,
      },
    }).then((res) => {
      return res.data;
    });

    // I measured the the token  is valid for 10 min I put the validity on 9.5 minutes for having headspace
    authCache.set("token", `Bearer ${request.token}`, 570);

    // Sends the cache to the next controller
    req.auth = authCache.get("token");
    // res.status(200).json(request);
    return next();
  } else {
    req.auth = token;
    next();
  }
});
