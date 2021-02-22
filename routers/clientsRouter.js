const express = require("express");

const router = express.Router();

router.route("/");
router.route("/:id");
router.route("/:id/policies");

module.exports = router;
