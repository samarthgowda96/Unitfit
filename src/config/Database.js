const express = require("express")
const app = express()



app.get('/', (req, res) => {
    res.send("we are om home")
});

app.listen(3000);

// const mongoose = require("mongoose");

// Replace this with your MONGOURI.
//const MONGOURI = "mongodb+srv://Mobile21:Unifit21!@cluster0.itgad.mongodb.net/Unitfit?retryWrites=true&w=majority";

//` const InitiateMongoServer = async() => {
//try {
//await mongoose.connect(MONGOURI, {
//useNewUrlParser: true
//});
//console.log("Connected to DB !!");
//} catch (e) {
//console.log(e);
//throw e;
//}
//};

//module.exports = InitiateMongoServer;