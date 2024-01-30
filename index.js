const express=require('express');
const {connection}=require('./db');
const {userRouter}=require('./routes/user.routes')
const {otpRouter}=require('./routes/otp.routes')
const {forgotPassRouter}=require('./routes/forgotPassword.routes');
const cors=require('cors');

const app=express();

app.use(express.json());
app.use(cors());



app.use("/user",userRouter);
app.use('/otp',otpRouter)
app.use('/forget_password',forgotPassRouter);


app.listen(8080,async()=>{
    try{
       await connection
       console.log("connected to db");
       console.log("Server is running at port 4500");
    }catch(err){
        console.log(err);
    }
    
})