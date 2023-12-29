const express= require("express");
const router= new express.Router();
const Products= require ("../Models/Productschema.js");
const products = require("../constants/Productsdata");
const user= require("../Models/userSchema.js");
const bcrypt =  require("bcryptjs");
const authenicate = require("../middleware/authenticate.js");
// Now you can use UserModel for your operations



//get product data api 
router.get("/getproducts", async(req,res)=>{
    try{
        const productdata= await Products.find();
       res.status(201).json(productdata)
    }
    catch(error){
        console.log("error" + error.message);
    }
});
// register the data
// register the data
router.post("/register", async (req, res) => {
    const { fname, email, mobile, password, cpassword } = req.body;

    if (!fname || !email || !mobile || !password || !cpassword) {
        res.status(422).json({ error: "filll the all details" });
    };

    try {

        const preuser = await user.findOne({ email: email });

        if (preuser) {
            res.status(422).json({ error: "This email is already exist" });
        } else if (password !== cpassword) {
            res.status(422).json({ error: "password are not matching" });;
        } else {

            const finaluser = new user({
                fname, email, mobile, password, cpassword
            });

            // yaha pe hashing krenge

            const storedata = await finaluser.save();
            console.log(storedata + "user successfully added");
            res.status(201).json(storedata);
        }

    } catch (error) {
        console.log("error the bhai catch ma for registratoin time" + error.message);
        res.status(422).send(error);
    }

});
// login data
router.post("/login", async (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ error: "fill the details" });
    }

    try {

        const userlogin = await user.findOne({ email: email });
        console.log(userlogin);
        if (userlogin) {
            const isMatch = await bcrypt.compare(password, userlogin.password);
            console.log(isMatch);



            if (!isMatch) {
                res.status(400).json({ error: "invalid crediential pass" });
            } else {
                
            
                res.status(201).json({message:"user loged in"});
            }

        } else {
            res.status(400).json({ error: "user not exist" });
        }

    } catch (error) {
        res.status(400).json({ error: "invalid  deyails" });
    }
});

// adding the data into cart
router.post("/addcart/:id",authenicate, async (req, res) => {

    try {
      //  console.log("perfect 6");
        const { id } = req.params;
        const cart = await products.findOne({ id: id });
        console.log(cart + "cart milta hain");

        const Usercontact = await user.findOne({ _id: req.userID });
        console.log(Usercontact + "user milta hain");


        if (Usercontact) {
           const cartData = await Usercontact.addcartdata(cart);

            await Usercontact.save();
            console.log(cartData + " thse save wait kr");
            console.log(Usercontact + "userjode save");
            res.status(201).json(Usercontact);
       }else{
        res.status(401).json({error:"invalid user"})
       }
    } catch (error) {
        console.log(error);
    }
});

//get individual products
router.get("/getproductsone/:id", async (req, res) => {

    try {
        const { id } = req.params;
        const individual = await Products.findOne({ id: id });
        console.log(individual + "ind mila hai");

        res.status(201).json(individual);
    } catch (error) {
        res.status(400).json(error);
    }
});
// get data into the cart
router.get("/cartdetails", authenicate, async (req, res) => {
    try {
        const buyuser = await user.findOne({ _id: req.userID });
        console.log(buyuser + "user hain buy pr");
        res.status(201).json(buyuser);
    } catch (error) {
        console.log(error + "error for buy now");
    }
});

module.exports=router;