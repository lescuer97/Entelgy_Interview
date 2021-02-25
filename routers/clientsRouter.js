const express = require("express");
const { insuranceApiLogin } = require("../controllers/authController");

const router = express.Router();

router.use(insuranceApiLogin);

module.exports = router;
