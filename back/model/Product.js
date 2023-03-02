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

const Product = mongoose.model("Product", ProdSchema);

export default Product;
