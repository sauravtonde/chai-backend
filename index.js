import dotenv from 'dotenv';
import express from 'express'

import connectDB from './src/db/db.js';

dotenv.config({ path: './.env' });  // Load the environment variables

const app = express()


connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT}`)
    })
  })
  .catch((err) => {
    console.log("MONGODB CONNECTION FAILED !!", err);
  })




// Connect to MongoDB
