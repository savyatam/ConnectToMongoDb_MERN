const express = require('express');
const app=express();
const http=require('http').Server(app);
const port=process.env.PORT||4000;
const routes=require('./routes/api');
const Bodyparser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URL,
  {
   useUnifiedTopology: true,
   useNewUrlParser: true
  }
);
mongoose.Promise = global.Promise;
app.use(Bodyparser.json());
app.get('/',function(req,res){
  res.send("It works");
})
app.use('/api',routes);
app.listen(port);
