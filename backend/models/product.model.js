import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name:{type:String, required:true},
  description:{type:String, required:true},
  price:{type:Number, required:true},
  image:{type:Array, required:true},
  category:{type:String, required:true,enum:['men','women','kids']},
  subCategory:{type:String,required:true,enum:['topwear','bottomwear','winterwear']},
  sizes:{type:[String], required:true,enum:['xs','s','m','l','xl','xxl']},
  bestSeller:{type:Boolean, default:false},
  date:{type:Number,required:true}
})

export default mongoose.model('Product', productSchema);