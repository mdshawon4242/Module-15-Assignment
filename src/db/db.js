const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect(
      'mongodb+srv://assignment15:KxLdwepO5wH2KjET@cluster0.vbbvbv9.mongodb.net/',
    );
    console.log('Connect to DB');
  } catch (error) {
    console.error('MongoDB connection error', error);
  }
}

module.exports = connectDB;
