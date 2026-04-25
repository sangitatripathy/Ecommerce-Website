import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/user.route.js';
import productRouter from './routes/product.route.js';
import cartRouter from './routes/cart.route.js';
import orderRouter from './routes/order.route.js';

const app = express()
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
  res.send('API working')
})

app.use('/api/user',userRouter);
app.use('/api/product',productRouter);
app.use('/api/cart',cartRouter);
app.use('/api/order',orderRouter);

connectDB();
connectCloudinary();

app.listen(port,()=>{
  console.log(`Server started on http://localhost:${port}`)
})