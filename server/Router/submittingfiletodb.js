 const mongoose=require("mongoose"); 
 const Sch=require("../model/blogSchema");
 const express=require("express"); 
 const router=express.Router();
 
 
 
 
 router.post("/submit",async (req,res)=>{
     console.log(req.body);
     const{name,tname,myblog}=req.body;

     if(!name || !tname || !myblog){
         return res.status(404).json({error:"Fill the Entries"});
     }
     try{
        sch=new Sch({name,tname,myblog});
         const submitting=await sch.save();
         if(submitting){
             console.log("submitted data To Database..........");
         }else{
            console.log("data XX To Database..........");
         }
     }catch(err){
console.log(err);
    }
 });

 module.exports=router;