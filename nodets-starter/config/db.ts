import mongoose from "mongoose";
mongoose.set("strictQuery", true);

const connectDB = async () => {
   try {
      const conn = await mongoose.connect(process.env.MONGO_URL ?? "");
      console.log(`MongoDB Connected : ${conn.connection.host}`);
   } catch (error) {
      console.log("Connected Error : ", error);
      process.exit(1);
   }
};

export default connectDB;
