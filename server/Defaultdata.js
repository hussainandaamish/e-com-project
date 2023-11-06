const Products=require("./Models/Productschema")
const productsdata=require("./constants/Productsdata");

const DefaultData= async()=>{
    try{
        await Products.deleteMany({})
        const storedata= await Products.insertMany(productsdata)
        console.log(storedata)
    }catch(error){
        console.log(error.message)
    }
}
module.exports= DefaultData;