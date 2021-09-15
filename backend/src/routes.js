const express = require('express');

const router = express.Router();

// controllers
const clientController = require("./controllers/clientController");
const paymentController = require("./controllers/paymentController");
const professionalController = require("./controllers/professionalController");
const tattooController = require("./controllers/tattooController");


//router - separados de acordo com as entidades
router
.get("/clients", clientController.index)
.get("/client/:id", clientController.show)
.post("/client", clientController.create)
.patch("/client/:id", clientController.update)
.delete("/client/:id", clientController.delete)

.get("/payments", paymentController.index)
.get("/payment/:id", paymentController.show)
.post("/payment", paymentController.create)
.delete("/payment/:id", paymentController.delete)

.get("/professionals", professionalController.index)
.get("/professional/:id", professionalController.show)
.post("/professional", professionalController.create)
.patch("/professional/:id", professionalController.update)
.delete("/professional/:id", professionalController.delete)

.get("/tattoos", tattooController.index)
.get("/tattoo/:id", tattooController.show)
.post("/tattoo", tattooController.create)
.patch("/tattoo/:id", tattooController.update)
.delete("/tattoo/:id", tattooController.delete)

module.exports = router;