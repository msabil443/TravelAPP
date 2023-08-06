const express = require ('express');
const router = express.Router();
const hotelGetAllHotelHandler = require("../controllers/hotelController");
router.route("/")
    .get(hotelGetAllHotelHandler);


module.exports = router;

