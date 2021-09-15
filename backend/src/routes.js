const express = require('express');

const router = express.Router();

// controllers
const clientController = require("./controllers/clientController");

router.get("/clients", clientController.index)

router.post("/client", clientController.create)
router.patch("/client", clientController.update)


module.exports = router;