const express = require('express');
const app = express();
const configRoutes = require('./routes');

const cors= require('cors');
app.use(express.json());
app.use(cors())

configRoutes(app);

app.listen(3005, ()=>{
    console.log('Routes will be running on http://localhost:3005');
})