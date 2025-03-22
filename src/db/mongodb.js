import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      //mongoose returns an object
      `${process.env.MONGODB_URI}/${DB_NAME}`,
    );
    console.log(
      `\n Dtabase connection || DB host: ${connectionInstance.connection.host}`,
    );
  } catch (error) {
    console.log(("Connection failed: ", error));
    process.exit(1); //this will exit the process
  }
};

export default connectDB;
