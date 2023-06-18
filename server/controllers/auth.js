import bcrypt from "bcrypt";
import jwt  from "jsonwebtoken";
import User from "../models/User.js";
import { response } from "express";


//  REGISTER USER

export const register  = async (req , res) => {
    try {
        const {
            name,
            username,
            email,
            password,
            phone,
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password , salt);

        const newUser = User({
            name, 
            username,
            email,
            password : passwordHash ,
            phone,
             });
        // res.status(200).json({msg : "Account created"})
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch(e){
        res.status(500).json({ error: e.message});
    }
};

// LOGGING IN

export const login = async (req, res) => {
    try{
        const { email , password } = req.body;
        // res.status(400).json({msg : req.body.email + " body :" + email});
        const user = await User.findOne({ email : email });
        if (!user) return res.status(400).json({msg: "email doesn't exist " + email });

        const isMatch = await bcrypt.compare(password , user.password);
        if(!isMatch) return res.status(401).json({ msg: "Invalid Password" });
        
        
        const token = jwt.sign({ id: user.id } , process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({ token, user });
    }
    catch(e){
        console.log(res.status())
        res.status(500).json({ error: err.message});
    }
};