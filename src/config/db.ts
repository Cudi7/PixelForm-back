import { connect } from "mongoose";

async function connectDB() {
  const URL: string = process.env.MONGODB_URL || "";

  try {
    await connect(URL);

    console.log("Connected to MongoDB w/mongoose **___d•ᴗ•b___**");
  } catch (error) {
    console.log(error);
  }
}

export default connectDB;
