import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routerUser from './router/user.js';
import router from './router/product.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/product', router);
app.use('/user', routerUser);

dotenv.config();
const uri = process.env.mongodb || '';
const PORT = process.env.port || 2000;

const connect = () => {
  try {
    mongoose.connect(uri, {}).then(() => {
      console.log('Connected to mongoDataBase');
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
