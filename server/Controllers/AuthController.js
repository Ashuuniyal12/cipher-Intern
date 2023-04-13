import UserModal from "../Models/userModel.js";
import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

//Registering a new user 
export const registeUSer = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;

        const newuser = new UserModal(req.body);
        const{email} = req.body;

        const oldUser = await UserModal.findOne({email});
        if(oldUser) return res.status(400).json({message: "User already exists"});

        const user = await newuser.save();

        const token = jwt.sign({ 
            email: user.email, id: user._id
        }, process.env.JWT_SECRET, {expiresIn: "1h"});

        res.status(200).json({user, token});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Login a user
export const LoginUser = async (req, res) => {
    try{
        const {password, email } = req.body;

        const user = await UserModal.findOne({ email });

        if(user){

            const validPassword = await bcrypt.compare(password, user.password);
            if(!validPassword){  
                res.status(400).json({message: "Invalid Password"});
            }else{
                const token = jwt.sign({ 
                    email: user.email, id: user._id
                }, process.env.JWT_SECRET, {expiresIn: '5s'});
                res.status(200).json({user, token});
            }
        }else{
            res.status(400).json({message: "User don't Exist"});
        }
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

export const changePassword = async (req, res) => {
    try{

        const {oldPassword ,email} = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.newPassword, salt);
        
        const oldUser = await UserModal.findOne({ email});
        
        if (oldUser) {
            const validPassword = await bcrypt.compare(oldPassword, oldUser.password);
            if (!validPassword) {
                return res.status(401).json({ error: "Invalid Old Password" });
            }
            else {
                oldUser.password = hashedPassword;
                const savedUser = await oldUser.save();
                res.status(200).json({ user: savedUser });
            }
        }
        else {
            return res.status(400).json({ error: "User not found" });
        }

    }catch (error) {
        res.status(500).json({message: error.message});
    }
}