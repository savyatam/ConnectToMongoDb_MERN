const express= require('express');
const router=express.Router();
router.get('/findpage',function(req,res)
{
  res.send("get works");
});
router.post('/findpage',function(req,res)
{
  res.send("post works");
});
router.delete('/findpage/:id',function(req,res)
{
  res.send("delete works");
});
module.exports=router;
