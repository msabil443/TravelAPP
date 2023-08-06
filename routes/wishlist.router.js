const express = require('express');

const verifyUser = require("../middleware/verifyuser");

const wishlistController = require("../controllers/wishlistController")
const {createWishlistHandler, deleteWishlistHandler, getAllWishlistsHandler}=wishlistController;
const router = express.Router();

router.route("/")
    .post(verifyUser, createWishlistHandler)

router.route("/:id")
    .delete(verifyUser, deleteWishlistHandler)


router.route("/")
    .get(verifyUser, getAllWishlistsHandler)


module.exports = router;