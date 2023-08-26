import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cors from 'cors';

//rest object
const app = express();

//configure dotenv
dotenv.config();
//database config -sari configuration database wali file me krna hh yhan bs jis name se import kiye ho us file ko usko call kr lo bs 
connectDB();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/product', productRoutes);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`server running on ${process.env.DEV_MODE} mode PORT ${PORT}`.bgRed.black);
})

