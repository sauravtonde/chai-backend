import dotenv from 'dotenv';
import connectDB from './db/db.js';

dotenv.config({ path: './.env' });  // Load the environment variables

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
