import mongoose from "mongoose";

const ProdSchema = new mongoose.Schema({
  price: Number,
  picture: String,
  type: String,
  title: String,
  color: String,
  description: String,
  user_id: {
    type: String,
    ref: "User",
    required: true,
  },
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

const FavSchema = new mongoose.Schema({
  productId : String,
  user_id: {
    type: String,
    ref: 'User',
    required: true,
  },
})

export const Fav = mongoose.model('Fav', FavSchema);
export const Product = mongoose.model('Product', ProdSchema);
export const Order = mongoose.model('Order', OrderSchema);