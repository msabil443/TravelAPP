const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config();
//we have stored the DATABASE_URL in the .env file so as to gitignore it and not allow other developers to manipulate
const connectDB = async () =>
{
    try{
        await mongoose.connect(process.env.DATABASE_URL,{//this is how we will connect the mongoose database
            useUnifiedTopology: true,//usually used to avoid errors
            useNewUrlParser: true
        })
    }
    catch(err)
    {
        console.log(err);
    }
}
module.exports = connectDB;