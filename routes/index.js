const express = require('express');
const app =express();
const router = express.Router();

const productController = require("../controller/productController")

router.use('/products',require('./product'));


module.exports= router;