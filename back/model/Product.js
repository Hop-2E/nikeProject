import mongoose from 'mongoose';

const ProdSchema = new mongoose.Schema({
  price: Number,
  size: String,
  picture: String,
  sale: Number,
  type: String,
  title: String,
  materials: String,
  description: String,
});

const OrderSchema = new mongoose.Schema({
  productId: {
    type: String,
  },
  user_id: {
    type: String,
    ref: 'User',
    required: true,
  },
});

export const Product = mongoose.model('Product', ProdSchema);
export const Order = mongoose.model('Order', OrderSchema);
