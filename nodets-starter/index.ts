import express from "express";
import cors from "cors";
import {config} from "dotenv";
import connectDB from "./config/db";
import errorHandler from "./middlewares/errorMiddleware";
import testRoute from "./routes/testRoute"
config();
const app = express();
const port = process.env.PORT || 5000;


// Connect the Mongodb Database
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(errorHandler);

app.use("/", testRoute);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

