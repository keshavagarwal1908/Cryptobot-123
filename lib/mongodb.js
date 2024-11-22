import mongoose from 'mongoose';

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

let isConnected = false; // Track connection state

export async function connectToDatabase() {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = db.connections[0].readyState === 1;
    console.log('DB connection successful!');
  } catch (error) {
    console.error('Failed to connect to database:', error);
    throw error;
  }
}
