const express=require('express');
const router = express.Router();

const User=require("../models/user.model");
var bcrypt=require("bcryptjs")

router.get("/",async(req,res)=>{
    try{
        const user = await User.find().lean().exec();
        return res.status(201).json({user:user});
    }catch(err){
        return res.status(400).json({status:"error"});
    }
})

router.get("/:id",async(req,res)=>{
    try{
        const user = await User.findById(req.params.id).lean().exec();
        return res.status(201).json({user:user});
    }catch(err){
        return res.status(400).json({status:"error"});
    }
})

router.patch("/:id",async(req,res)=>{
    var password = req.body.password;
    if(!password){
        try{
            const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
            return res.status(201).json({user:user});
        }catch(err){
            return res.status(400).json({status:"error"});
        }
    }else{
        const hash = bcrypt.hashSync(password, 8);
        try{
            const user = await User.findByIdAndUpdate(req.params.id,{
                ...req.body,password:hash
            },{new:true}).lean().exec();
            return res.status(201).json({user:user});
        }catch(err){
            return res.status(400).json({status:"error"});
        }
    }
   
})


router.delete("/:id",async(req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).json({user:user});
    }catch(err){
        return res.status(400).json({status:"error"});
    }
})


module.exports=router;