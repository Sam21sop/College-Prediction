import mongoose from "mongoose";
import { UserModel } from "./usersSchema.js";

export default class UserRepository{
    async signUp(user){
        try {
            // create instance of userModel
            const newUser = new UserModel(user);
            await newUser.save();
            return newUser;
        } catch (error) {
            console.log(error);
        }
    };


    async singIn(email, password){
        try {
            return await UserModel.findOne({email, password})
        } catch (error) {
            console.log(error);
        }
    };


    async findByEmail(email){
        try {
           return await UserModel.findOne({email})
        } 
        catch (error) {
            console.log(error);
        }
    }
}
