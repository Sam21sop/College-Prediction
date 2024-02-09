import mongoose from "mongoose";


const studentSchema = mongoose.Schema({
    user_name:{
        type:String,
        requred:true
    },
    email_id:{
        type:String,
        unique:true,
        required:true
    },
    phone_number:{
        type:Number,
        unique:true,
        min:10,
        max:10,
        required:true
    },
    twelth_mark:{
        type:Number,
        min:0,
        max:100,
        rewuired:true
    },
    CET_mark:{
        type:Number,
        min:0,
        max:200,
        required:true
    },
    branch_name:{
        type:String,
        enum: ["Computer Science", "Information Technology", "Artificial Intelligence and Machine Learning", "Artificial intelligence and Data Science", "Mechanical", "Electronics and Telecommunincation"],
    },
    student_cast:{
        type:String,
        enum: ["General", "OBC", "SC", 'NT', "ST"]
    },
});


const studentModel = mongoose.model("Student", studentSchema);
export default studentModel;