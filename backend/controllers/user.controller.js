import User from "../models/user.model.js";

export const loginUser = async(req,res) =>{

}

export const registerUser = async(req,res) =>{
  try{
    const {name,email,password} = req.body;

  }catch(error){
    res.status(500).json({message:'Registration failed', error:error.message})
  }
}

export const adminLogin = async(req,res) =>{
  try{

  }catch(error){
    res.status(500).json({message:'Admin login failed', error:error.message})
  }
}

