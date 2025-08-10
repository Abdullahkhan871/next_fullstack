import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

const dbConnect = async (): Promise<void> => {
  if (connection.isConnected) {
    console.log("DB Already connected");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "");
    console.log("DB", db);
    connection.isConnected = db.connections[0].readyState;
    console.log("DB Connect succesfully");
  } catch (error) {
    console.log("DB connection failed");
    process.exit(1);
  }
};

export default dbConnect;
