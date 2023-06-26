import mongoose from "mongoose";

// connect with mongoDB Atlas
export const connectDB = ()=>{
    mongoose
    .connect(
        process.env.MONGO_URL,
      {
        dbName: "userDB",
      }
    )
    .then(() => console.log("mongodb connected!"))
    .catch((e) => console.log(e));
  
}