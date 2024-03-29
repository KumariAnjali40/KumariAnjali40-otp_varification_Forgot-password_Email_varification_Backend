const express=require('express');
const {sendOtp}=require('../controller/otp.controller')
const {verifyOTP}=require('../controller/otp.controller')
const otpRouter=express.Router();


otpRouter.post('/verify',async(req,res)=>{
    try{
        const {email,otp}=req.body;
        const validOTP=await verifyOTP(email,otp);
        res.status(200).json({valid:validOTP})
    }
    catch(error){
        res.status(400).send(error);
    }
})


otpRouter.post('/',async(req,res)=>{
  try{
      const {email,duration}=req.body;
      const createdOTP=await sendOtp({
        email,
        duration
      });
      res.status(200).json(createdOTP);
  }
  catch(error){
      res.status(400).send(error);
  }
})


module.exports={
    otpRouter,
}