import { Router } from "express";
import { getAllColleges } from "../controllers/studentController.js";


const studentRouter = Router();


studentRouter.get('/college-list', getAllColleges);


export default studentRouter;