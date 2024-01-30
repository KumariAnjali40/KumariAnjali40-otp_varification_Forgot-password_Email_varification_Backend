const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:{
       type:String,
    },
    email:{
     type:String,
     required:true
   },mobile:{
       type:String,
      
    },
    password:{
       type:String,
       required:true
    },
    age:{
        type:String,
    },
    
   },
   { timestamps: true, versionKey:false }
   ,{
       versionKey:false

})

const UserModel=mongoose.model('user',userSchema);


module.exports={
    UserModel,
}