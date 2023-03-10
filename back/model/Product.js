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
  count: String,
  productId: {
    type: String,
    ref: "Product",
  },
  user_id: {
    type: String,
    ref: "User",
    required: true,
  },
});

export const Product = mongoose.model("Product", ProdSchema);
export const Order = mongoose.model("Order", OrderSchema);
