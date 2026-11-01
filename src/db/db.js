const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_KEY);
    console.log('Connect to DB');
  } catch (error) {
    console.error('MongoDB connection error', error);
  }
}

module.exports = connectDB;
