const Customer = require("../models/customer.model.js");
const bcrypt= require("bcrypt");
const saltRounds = 18;
// Create and Save a new Customer
exports.create = async (req,res)=>{

    
      //const salt = await bcrypt.genSalt();
      //const hashedPassword= await bcrypt.hash(req.body.password,salt);
      //console.log(salt);
     // console.log(hashedPassword);
    // Validate request
    if(!req.body){
        res.status(400).send({
            message:"enter a valid request!"
        });
    }
    
    const hash = await bcrypt.hash(req.body.password, saltRounds);


 // Create a Customer
    const customer = new Customer({
        username:req.body.username,
        password:hash
        
    });
    


  // Save Customer in the database
    Customer.create(customer,(error,data)=>{
        
        if(error)
            res.status(500).send({
                message:
                error.message || "some error occured while creating the user"
            })
        
        else res.send(data);
    })

} 

exports.login= async (req,res)=>{
    if(!req.body){
        res.status(400).send({
            message:"enter a valid request!"
        });
    }
    
   // const hash = await bcrypt.hash(req.body.password, saltRounds);


 // Create a Customer
    /* const customer = new Customer({
        username:req.body.username,
        password:req.body.password
        
    }); */
    const username = req.body.username;
    const password = req.body.password;
    console.log(username)

  // Save Customer in the database
    Customer.login(username,(error,data)=>{
        
        if(error)
            res.status(500).send({
                message:
                error.message || "some error occured while creating the user"
            })
        
        else res.send(data);
    })
}
