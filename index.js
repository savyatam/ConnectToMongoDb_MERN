const express = require('express');
const app=express();
app.get('/',function(req,res){
  res.send("it works");
})
app.listen(4000);
