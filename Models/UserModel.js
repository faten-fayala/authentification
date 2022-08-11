const mongoose=require('mongoose')

const UserSchema=mongoose.Schema({
    firstName:String,
    lastName:String,
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    }
})
module.exports=mongoose.model('user',UserSchema)