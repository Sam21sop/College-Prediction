import collegeModel from "../models/collegeModel.js";

export const getAllColleges = async(req, res) => {
    try {
        // get all college list
        const colleges = await collegeModel.find();
        res.status(200).json(colleges);
    } catch (error) {
        res.status(500).json({error:"Colleges not found!"})
    }
};