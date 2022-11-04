const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const userShema=Schema({
    fullName:String,email:String,phone:String

})

module.exports=mongoose.model("user",userShema)
