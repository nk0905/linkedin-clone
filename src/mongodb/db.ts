import mongoose from 'mongoose';

const connectionString = 'mongodb://localhost:27017/';

if (!connectionString) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env'
  );
}
