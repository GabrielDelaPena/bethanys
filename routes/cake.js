const router = require("express").Router();

const cakeController = require("../controllers/cake");

router.get("/", cakeController.getCakes);

router.post("/", cakeController.addCake);

module.exports = router;
