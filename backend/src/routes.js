const express = require('express');

const router = express.Router();

// controllers
const clientController = require("./controllers/clientController");
const paymentController = require("./controllers/paymentController");
const professionalController = require("./controllers/professionalController");
const tattooController = require("./controllers/tattooController");

router
.get("/clients", clientController.index)
.get("/client/:id", clientController.show)
.post("/client", clientController.create)
.patch("/client/:id", clientController.update)
.delete("/client/:id", clientController.delete)

// .get("/clients", paymentController.index)
// .get("/client/:id", paymentController.show)
// .post("/client", paymentController.create)
// .patch("/client", paymentController.update)

// .get("/clients", professionalController.index)
// .get("/client/:id", professionalController.show)
// .post("/client", professionalController.create)
// .patch("/client", professionalController.update)

// .get("/clients", tattooController.index)
// .get("/client/:id", tattooController.show)
// .post("/client", tattooController.create)
// .patch("/client", tattooController.update)



module.exports = router;