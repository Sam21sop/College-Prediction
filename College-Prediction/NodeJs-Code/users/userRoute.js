import express from "express";
import UserController from "./usersController.js";


// intialize express Router
const userRouter = express.Router();

// initiate controller instance
const userController = new UserController();

// define all userRoutes here
userRouter.post('/signup', (req, res) => {
    userController.signUp(req, res);
});


userRouter.post('/signin', (req, res) => {
    userController.signIn(req, res);
});


userRouter.put('/resetPassword', (req, res) => {
    userController.resetPassword(req, res);
})




// export userRouter
export default userRouter;