const CryptoJS =  require ('crypto-js');
const User = require('../model/user.model')




const signupHandler = async (req, res) => {
    try{
        const newUser = new User({//creating a template for the backend to create a new user
            username:req.body.username,
            number: req.body.number,
            email:req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET_KEY).toString()//we can add constraints to the user objects, but we will do it later in the client side
        });//here the backend will create a new user form the db (compatible to the schema we have created)
        const savedUser = await newUser.save();//this will actually add the user to the db
        res.status(201).json(savedUser);//success(200) and added a new entity(201)
    }catch(err)
    {
        // console.error(err);
        res.status(500).json({messsage:"error creating the user"});//if the schema to be created is not compatible then error will be thrown
    }
};


module.exports = signupHandler;