const Wishlist = require('../model/wishlist.model');



const createWishlistHandler =  async (req, res) => {
    const newWishlist = new Wishlist(req.body);
    try{
        const savedWishlist = await newWishlist.save();
        res.status(201).json(savedWishlist);
    }
    catch(err){
        res.status(201).json({message:"failed to create wishlist"})
    }
}


const deleteWishlistHandler = async (req, res) => {
    try{await Wishlist.findByIdAndDelete(req.params.id);
    res.json({message:"Hotel Deleted from Wishlist"});}
    catch(err)
    {
        res.status(500).json({message:"Error deleting Hotel form Wishlist"});
    }
}

const getAllWishlistsHandler = async(req, res)=>{
    try{
        const wishlist = await Wishlist.find({});
        wishlist ? res.json(wishlist) : res.json({message:"No items were found in the wishlist"})
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json(err);
    }
}

module.exports = {createWishlistHandler, deleteWishlistHandler, getAllWishlistsHandler};