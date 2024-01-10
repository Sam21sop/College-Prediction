import UserRepository from "./usersRepository.js";
import bcrypt from 'bcrypt';
import { UserModel } from "./usersSchema.js";
import  jwt from "jsonwebtoken";


export default class UserController{
    constructor(){
        this.userRepository = new UserRepository();
    };

    // user signUp function/middleware
    async signUp(req, res){
        const {name, email, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new UserModel(name, email, hashedPassword)
        await this.userRepository.signUp(user); 
        res.status(201).send(user)
    };

    // user signIn function/middleware
    async signIn(req, res, next){
        try {
            //    1. Find user by email 
            const user = await this.userRepository.findByEmail(req.body.email)
            if(!user){
                return res.status(404).send("Email not Found!")
            }else{
                // 2. compare password with hashedPassword 
                const result = await bcrypt.compare(req.body.password, user.password);
                if(result){
                    // 3. create token
                    const token = jwt.sign(
                        { userID: user._id, email: user.email },
                        "072a0bf57e976e1f34578c9bf048984fd0499d1acba285d33eabd6de6472e950467438801afdc0e70d2f36b1ef7284b640070cab2621ede2dfbd7f154aa07cd8",
                        {expiresIn: '1h'}
                    );
                    // 4. send token
                    return res.status(200).send(token)
                }else{
                    return res.status(404).send("Incorrect Credintials");
                }
            }
        } 
        catch (error) {
            console.log(error);
        }
    };


};