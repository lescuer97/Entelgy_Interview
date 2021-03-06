const axios = require("axios").default;
const jwt = require("jsonwebtoken");
const NodeCache = require("node-cache");

const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

var authCache = new NodeCache();

const signToken = (ids) => {
  return jwt.sign({ ids }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

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

    // I measured that the token  is valid for 10 mins so I put the validity on for 9.5 minutes for having headspace
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

exports.userLogin = (req, res, next) => {
  const { email, password } = req.body;

  // 1) Check if email and password exist
  if (!email || !password) {
    return next(new AppError("Please provide email and password!", 401));
  }
};

exports.protectUserLogin = catchAsync(async (req, res, next) => {
  // 1) Getting token and check of it's there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(
      new AppError("You are not logged in! Please log in to get access.", 401)
    );
  }

  // 2) Verification token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // TODO MAKE A SEARCH OF THE USER TO GET ITS DATA AND VERIFY THE USER STILL EXISTS

  // TODO  CREATE REQ.USER TO TRANSFER FOR THE CONTROLLERS
});
