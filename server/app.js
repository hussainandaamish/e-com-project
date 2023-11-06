require("dotenv").config();
const express = require("express");
const app=express();
const mongoose = require("mongoose");
require("./db/connection.js");
const Products = require("./Models/Productschema.js");
const DefaultData=require("./Defaultdata.js");
app.use(express.json());
const cors=require("cors");
const router=require("./routes/Router.js");
app.use(router)
app.cors;

const port=8005;
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})
DefaultData();