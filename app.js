
const express = require('express');
require('dotenv').config();
const { router } = require('./routes/practice.route');

const { docClient} = require('./config/db');
const app = express();
const PORT = process.env.PORT;

app.use(router);
app.get('/',(req,res)=>{
    res.send({msg: "Hello from server.."});
})

app.listen(PORT, ()=>{
    try {
        // console.log("Document:", docClient);
        console.log(`server started on http://localhost:${PORT}`);
    } catch (error) {
        console.log(error);
    }
   
})