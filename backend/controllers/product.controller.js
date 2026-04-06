import Product from "../models/product.model.js";

export const addProduct = async(req,res) =>{
  try{

  }catch(error){
    res.status(500).json({success:false,message:'Failed to create product', error:error.message})
  }
}

export const listProducts = async(req,res) =>{
  try{

  }catch(error){
    res.status(500).json({success:false,message:'Failed to list products', error:error.message})
  }
}

export const removeProduct = async(req,res) =>{
  try{

  }catch(error){
    res.status(500).json({success:false,message:'Failed to remove product', error:error.message})
  }
}

export const singleProduct = async(req,res) =>{
  try{

  }catch(error){
    res.status(500).json({success:false,message:'Failed to fetch product', error:error.message})
  }
}