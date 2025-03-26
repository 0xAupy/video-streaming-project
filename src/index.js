import dotenv from "dotenv";
import connectDB from "./db/mongodb.js";

dotenv.config({
  path: "./env",
});
connectDB()
  .then(() => {
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`Sever is running on port : ${port}`);
    });
  })
  .catch((err) => {
    console.log("MOngoDB connection failed", err);
  });

// import express from "express";
// const app = express();

// (async () => {
//   try {
//     mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", () => {
//       console.error("Error connecting to the database");
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// })();
