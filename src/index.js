import dotenv from 'dotenv';
import connectDB from './db/db.js';

dotenv.config({ path: './.env' });  // Load the environment variables

connectDB();  // Connect to MongoDB
