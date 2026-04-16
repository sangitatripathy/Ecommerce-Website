import User from "../models/user.model.js";
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const generateToken = (id) =>{
  return jwt.sign({id}, process.env.JWT_SECRET_KEY, {expiresIn:'1h'})
}

export const loginUser = async(req,res) =>{
  try{
    const {email,password} = req.body;

    const user = await User.findOne({email});

    if(!user){
      return res.status(404).json({success:false,message:"User not found"})
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
      return res.status(400).json({success:false,message:"Invalid credentials"})
    }

    const token = generateToken(user.id);

    res.status(200).json({success:true,message:"Login successful",token,user:{id:user._id,name:user.name,email:user.email}})

  }catch(error){
    res.status(500).json({success:false,message:'Login failed', error:error.message})
  }
}

export const registerUser = async(req,res) =>{
  try{
    const {name,email,password} = req.body;

    const exists = await User.findOne({email});

    if(exists){
      return res.status(400).json({success:false,message:'User already exists'})
    }
    
    if(!validator.isEmail(email)){
      return res.status(400).json({success:false,message:'Invalid email format'})
    }

    if(password.length < 6){
      return res.status(400).json({success:false,message:'Password must be at least 6 characters'})
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });

    await newUser.save();

    const token = generateToken(newUser.id);

    res.status(201).json({message:'User registered successfully',token})

  }catch(error){
    res.status(500).json({message:'Registration failed', error:error.message})
  }
}

export const adminLogin = async(req,res) =>{
  try{
    const {email,password} = req.body;

    if(email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD){
      return res.status(400).json({success:false,message:"Invalid admin credentials"})
    }
    const token = jwt.sign(email+password,process.env.JWT_SECRET_KEY)

    res.status(200).json({success:true,message:"Admin login successful",token})
  } catch(error){
    res.status(500).json({message:'Admin login failed', error:error.message})
  }
}

