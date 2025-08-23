import connectDB from "./config/db";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from './routes/users';
import authRoutes from './routes/auth';
import sustainabilityRoutes from './routes/sustainability';

// Load environment variables
dotenv.config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(cors());
app.use(express.json());

// Define Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/sustainability', sustainabilityRoutes);

// Make the 'uploads' folder public
app.use('/uploads', express.static('uploads'));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ message: 'KisaanMitra Backend is running!' });
});

export default app;