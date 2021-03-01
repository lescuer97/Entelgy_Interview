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
router.use(policyAPIRequest);

router.route("/").get(clientAPIRequest, client);
router.route("/:id").get(clientAPIRequest, clientId);

//grabs the policies from a specified id
router.route("/:id/policies").get(clientPolicy);

module.exports = router;
