import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    name : String,
    email : {type:String, unique:true},
    password : String,
    // cast : String,
    // domicile : String,
    // cetMark : Number
});


// creating model from schema
export const UserModel = mongoose.model('User', userSchema)