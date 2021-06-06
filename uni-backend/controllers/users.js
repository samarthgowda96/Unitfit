import User from '../models/user.js';
import bcrypt from 'bcrypt';


export const register =async(req,res)=>{
    try {
       const salt = await bcrypt.genSalt(10);
       const hashedPasseword= await bcrypt.hash(req.body.password,salt);
       const newUser= new User({
           email:req.body.email,
           password:hashedPasseword
       })
       const user = await newUser.save();
       res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}

export const login = async(req,res)=>{
    try {
        const userCheck = await User.findOne({email:req.body.email})
        
        !userCheck && res.status(404).json("Wrong username or password");
        const validPassword= await bcrypt.compare(req.body.password,userCheck.password);
        !validPassword && res.status(404).json("Wrong username or password");
        const{password,...others}= userCheck._doc;
        res.status(200).json(others)
        
    } catch (error) {
       //console.log(error)
        
    }
}

export const getUserById=async(req,res)=>{
    const _id= req.params.id;
    try {
        const singleUser = await User.findById(_id)
        const {password,...others}=singleUser._doc
        res.status(200).json(others)
        
    } catch (error) {
        res.status(400).json({message:error.message})
        
    }
}

/* const getAllUsers=async() */