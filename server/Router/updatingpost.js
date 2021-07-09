const express= require("express");
const mongoose=require("mongoose");
const router03=express.Router();
const Sch=require("../model/blogSchema");


router03.patch("/updatepost/:id",async (req,res)=>{
    const{uname,utname,umyblog}=req.body;
    const id01=req.params.id;
    console.log(uname);
    console.log(utname);
    console.log(umyblog);
    
    try{
      const updata = await Sch.findByIdAndUpdate(id01,{$set:{name:uname,tname:utname,myblog:umyblog}});
        res.send(updata);
    }catch(err){
         res.status(404).send(err);
    }
});

module.exports=router03;