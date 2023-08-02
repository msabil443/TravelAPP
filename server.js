const express = require ('express');

const hotelRouter = require("./routes/hotel.router");

const app = express();

app.use(express.json());

const PORT = 3500;

app.get("/",(req, res)=>{

    res.send("Hello world")
})

app.use("/api/hotels", hotelRouter);


app.listen (process.env.PORT || PORT, ()=>{
    console.log("Server is UP and Running")
})