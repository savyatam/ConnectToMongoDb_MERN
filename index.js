const express = require('express');
const app=express();
const http=require('http').Server(app);
const port=process.env.PORT||4000;
const routes=require('./routes/api');
app.get('/',function(req,res){
  res.send("It works");
})
app.use('/api',routes);
app.listen(port);
