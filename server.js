const express = require ('express');

const mongoose = require('mongoose');
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const hotelDataAddedToDBRouter = require("./routes/dataimport.router");
const categoryDataAddedToDBRouter = require("./routes/categoryimport.router");

const hotelRouter = require("./routes/hotel.router");
const categoryRouter = require("./routes/category.router");
const singleHotelRouter = require("./routes/singlehotel.router");

const connectDB = require('./config/dbconfig');
const app = express();
// app.use("/api/hoteldata", hotelDataAddedToDBRouter);
// const connectDB = require("./config/dbconfig");

app.use(cors());
app.use(express.json());
connectDB();
const PORT = 3500;

app.get("/",(req, res)=>{

    res.send("Hello world")
})


app.use("/api/hoteldata", hotelDataAddedToDBRouter);//this is usedc to add data to the database
app.use("/api/hotels", hotelRouter);
app.use("/api/categorydata", categoryDataAddedToDBRouter);
app.use("/api/category", categoryRouter);
app.use("/api/hotels", singleHotelRouter);

mongoose.connection.once("open", ()=>{
    console.log("connected to the database");
    app.listen (process.env.PORT || PORT, ()=>{
        console.log("Server is UP and Running")
    })
})

