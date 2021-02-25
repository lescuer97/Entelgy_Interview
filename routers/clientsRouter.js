const express = require("express");
const {
  clientAPIRequest,
  client,
  clientId,
  clientPolicy,
} = require("../controllers/clientsController");
const { policyAPIRequest } = require("../controllers/policyControllers");

const { insuranceApiLogin } = require("../controllers/authController");

const router = express.Router();

router.use(insuranceApiLogin);

router.route("/").get(clientAPIRequest, client);
router.route("/:id").get(clientAPIRequest, clientId);
router.route("/:id/policies").get(policyAPIRequest, clientPolicy);

module.exports = router;
