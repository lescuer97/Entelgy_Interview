const express = require("express");
const {
  policyAPIRequest,
  policy,
  policyId,
} = require("../controllers/policyControllers");

const { insuranceApiLogin } = require("../controllers/authController");

const router = express.Router();

router.use(insuranceApiLogin);

router.route("/").get(policyAPIRequest, policy);

//grabs the clients and searches the array
router.route("/:id").get(policyAPIRequest, policyId);

module.exports = router;
