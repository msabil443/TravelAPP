//You can use this template to create the user in any other project
const express = require('express');
const CryptoJS =  require ('crypto-js');
const jwt = require ('jsonwebtoken');
const User = require('../model/user.model')

const router = express.Router();
//first the user hast ot register then login
router.route("/register")//localhost:3500/api/auth/register//necessary because we have to save the user data in the database
    .post(async (req, res) => {
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
    });

router.route("/login")//localhost:3500/api/auth/login
    .post(async (req, res) =>{
        try{
            const user = await User.findOne({number: req.body.number})
            !user && res.status(401).json({message: "Invalid mobile number"});

            const decodedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET_KEY).toString(CryptoJS.enc.Utf8);//encoded using utf8 encoding
            // console.log({decodedPassword});
            decodedPassword!==req.body.password && res.status(401).json({message: "Incorrect Password"});
            const {password, ...rest} = user._doc;
            const accessToken = jwt.sign({id: user.username}, process.env.ACCESS_TOKEN);
            res.json({...rest, accessToken});
        }
        catch(err){
            console.log(err);
        }
    })

module.exports = router;