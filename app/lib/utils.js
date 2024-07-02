import mongoose from "mongoose";

export const connetToDb = async () => {
  const connection = {};

  try {
    if (connection.isConnected) return; // if connected one time, return

    const db = await mongoose.connect(process.env.MONGO); // if not connected, connect to db
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    throw new Error(error);
  }
};
