
const sql= require("./db.js");

//This is the constuctor
 const Customer = function(customer) {
    this.username = customer.username;
    this.password = customer.password
  };

Customer.create=(newCustomer, result)=>{
    sql.query("INSERT INTO customers SET ?", newCustomer,(error,res)=>{
        if(error){
            console.log("error",error);
            result(error,null);
            return;

        }
        console.log(" created customer: ",{id:res.insertId, ...newCustomer})
        result(null,{id:res.insertId, ...newCustomer})
    })

} 
Customer.login=(username,result)=>{
    sql.query(`SELECT * FROM customers WHERE username = ${username}`, (err, res) => {
        console.log(res)
        if (err) {
            console.log("error:", err);
            result(err,null);
            return;
        }

        if (res.length) {
            console.log("Login successful:", res[0]);
            result(null, res[0])
            return;
        }

        result({king: "not_found"}, null);
    });
}

module.exports = Customer;