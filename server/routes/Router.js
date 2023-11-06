const express= require("express");
const router= new express.Router();
const Products= require ("../Models/Productschema.js");
const products = require("../constants/Productsdata");


//get product data api 
router.get("/getproducts", async(req,res)=>{
    try{
        const productdata= await Products.find();
       console.log("console the data of "+ productdata)
       res.status(201).json(productdata)
    }
    catch(e){
        console.log(e)
    }
})

module.exports=router;