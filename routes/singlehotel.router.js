const express = require('express');
const router = express.Router();

const Hotel =   require("../model/hotel.model");


//localhost:3500/api/64cf499e9192d0800d093b87
router.route("/:id")
    .get(async (req, res) =>{
        try{
            const{id}=req.params;//{id:64cf499e9192d0800d093b87};   
            const hotel = await Hotel.findById(id);
            res.json(hotel)
        }catch(err){
                res.status(404).json({message:"Couldn't find hotel"})
        }
    })

module.exports = router;