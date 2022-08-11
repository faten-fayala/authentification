const mongoose=require('mongoose')
const config=require('config')
const dbConnect=()=>{
    mongoose.connect((config.get('DB_CONNEXION.URI')),(err)=>{
        err ? console.log(err) : console.log("database connected")
    })
}
module.exports=dbConnect