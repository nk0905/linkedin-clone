import mongoose from 'mongoose';

const connectionString = 'mongodb://localhost:27017/';

if (!connectionString) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env'
  );
}

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    console.log('---- Connecting to MongoDB ----');
    await mongoose.connect(connectionString);
  } catch (error) {
    console.log('Error connecting to MongoDB: ', error);
  }
};
