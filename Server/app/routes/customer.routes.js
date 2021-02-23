
module.exports=app=>{
    const customers = require("../controllers/customer.controller.js");
    app.post("/register", customers.create);
    
    app.post("/login",customers.login);
 
    


    


};