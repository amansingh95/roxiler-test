const express = require('express');
const axios = require('axios');
const PORT = 5000;
const app =express();
app.use(express.json());

app.get('/test', function(req,res){
    res.json({'hi':'ok'})
})
app.get('/test/fetchapi', async function(req,res){
    const data= await axios.get('https://roxiler-interviews.s3.amazonaws.com/product_transaction.json');
    console.log("data",data);
    for(var)
})

app.listen( PORT, console.log(`server is running on ${PORT}`));