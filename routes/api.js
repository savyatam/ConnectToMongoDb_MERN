const express= require('express');
const router=express.Router();
const Ninja=require('../models/ninjas');

/*router.get('/findpage',function(req,res)
{
  res.send("get works");
});*/
router.get("/found", (req, res, next) => {
  Ninja.find()
    .exec()
    .then(docs => {
      console.log(docs);
      //   if (docs.length >= 0) {
      res.status(200).json(docs);
      //   } else {
      //       res.status(404).json({
      //           message: 'No entries found'
      //       });
      //   }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.post('/findpage',function(req,res)
{
  Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
      });
});
router.delete('/findpage/:id',function(req,res)
{
  res.send("delete works");
});
module.exports=router;
