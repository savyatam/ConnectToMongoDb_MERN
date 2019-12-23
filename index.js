const express = require('express');
const app=express();
const http=require('http').Server(app);
const port=process.env.PORT||4000;
app.get('/',function(req,res){
  res.send("It works");
})
app.listen(port);
