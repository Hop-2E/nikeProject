import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();
const uri = process.env.mongodb || "";
const PORT = process.env.port || 2000;

const connect = () => {
  try {
    mongoose.connect(uri, {}).then(() => {
      console.log("Connected to mongoDataBase");
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

app.listen(PORT, async () => {
  connect();
  console.log(`Server listening on port ${PORT}`);
});
