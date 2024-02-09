import { Router } from "express";
import { getAllColleges } from "../controllers/collegeController.js";


const collegeRouter = Router();


collegeRouter.get('/list', getAllColleges);


export default collegeRouter;