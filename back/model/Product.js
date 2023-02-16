import mongoose from 'mongoose';

const ProdSchema = new mongoose.Schema({
  size: String,
  picture: String,
  sale: Number,
  price: Number,
  type: String,
  title: String,
  materials: String,
  description: String,
});

const Product = mongoose.model('Product', ProdSchema);

export default Product;
