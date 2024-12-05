import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import apiRoutes from './Routes/userRoutes';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());

// Middleware
app.use(express.json());

// Database Connection
const dbConnection =async () => {
  const conect = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/Assignment')
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error', err));

}

dbConnection();

// Routes
app.use('/api', apiRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Employee Management API');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

