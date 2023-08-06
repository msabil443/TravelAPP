const express = require('express');
const router = express.Router();

const singleHotelHandler = require("../controllers/singleHotelController")


//localhost:3500/api/64cf499e9192d0800d093b87
router.route("/:id")
    .get(singleHotelHandler)

module.exports = router;