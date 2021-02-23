const axios = require("axios");
const catchAsync = require("../utils/catchAsync");

// grabs all the clients from the api
exports.clientAPIRequest = catchAsync(async (req, res, next) => {
  const query = await axios({
    method: "get",
    url: "https://dare-nodejs-assessment.herokuapp.com/api/clients",
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

  req.clients = query;
  next();
});
