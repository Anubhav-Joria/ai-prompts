import mongoose from "mongoose";

let isConnected = false;
export  const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("Already connected to db.....");
    return;
  }
  try {
    await mongoose.connect(process.env.DB as string, {
      dbName: "ai-promt",
    });
    isConnected = true;
    console.log('connected')
  } catch (err) {
    console.log(err);
  }

};
