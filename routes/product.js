const express = require("express");

const router = express.Router();

const productController = require("../controller/productController");

router.get("/", productController.getProduct);
router.post("/create", productController.addProduct);
router.post("/:id/update_quantity", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
